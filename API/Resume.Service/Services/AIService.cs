using Microsoft.Extensions.Configuration;
using System;
using System.Text;
using System.Text.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using OpenAI;
using Resume.Core.IServices;
using Resume.Core.Models;
using Resume.Data;
using Xceed.Words.NET;
using iText.Kernel.Pdf;
using iText.Kernel.Pdf.Canvas.Parser;
using PdfTextExtractor = iText.Kernel.Pdf.Canvas.Parser.PdfTextExtractor;
using PdfDocument = iText.Kernel.Pdf.PdfDocument;
using PdfReader = iText.Kernel.Pdf.PdfReader;
using Resume.Core.IRepository;
using AutoMapper;
using Microsoft.AspNetCore.Http;


namespace Resume.Service.Services
{
    public class AIService : IAIService
    {
        private readonly HttpClient _httpClient;
        //private readonly string _openAiApiKey;
        private readonly IAIRepository _IaIRepository;
        private readonly IMapper _mapper;
        private readonly string _myApiKey; 

        public AIService(IConfiguration config, OpenAIClient openAI, IAIRepository aIRepository, IMapper mapper)
        {
            _httpClient = new HttpClient();
            _myApiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
            _IaIRepository = aIRepository;
            _mapper = mapper;
        }
        public async Task<AIResponse> GetAIResponseById(int aiId)
        {
            return await _IaIRepository.GetAIResponseByIdAsync(aiId);
        }
        
        public async Task AddAiResponseAsync(IFormFile resumeFile, int userId)
        {
            string fileName = resumeFile.FileName;
            string extention = Path.GetExtension(fileName);
            if (string.IsNullOrEmpty(extention)) throw new ArgumentException("Extension is required.", nameof(extention));

            if (extention.Contains("pdf", StringComparison.OrdinalIgnoreCase))
            {
                var resumeText = ExtractTextFromPdf(resumeFile);
                await AnalyzeResumeAsync(resumeText, userId, fileName);
            }
            else if (extention.Contains("docx", StringComparison.OrdinalIgnoreCase))
            {
                var resumeText = ExtractTextFromDocx(resumeFile);
                await AnalyzeResumeAsync(resumeText, userId , fileName);
            }
            else
            {
                throw new ArgumentException("Unsupported file extension.", nameof(extention));
            }
        }
  
        private async Task AnalyzeResumeAsync(string resumeText, int userId,string fileName)
        {
            if (string.IsNullOrWhiteSpace(resumeText))
                throw new ArgumentException("Resume text cannot be null or empty.", nameof(resumeText));

            var request = new
            {
                model = "gpt-4o-mini", // Ensure this model is correct
                messages = new[] {
            new { role = "system", content = "You are an AI that extracts information from a resume file." },
            new { role = "user", content = $"Extract the following information: " +
                $"Occupation, Height, Age, PlaceOfStudy, " +
                $"FirstName, FatherName, MotherName, LastName, Address. " +
                $"Return them in JSON format.\n\n{resumeText}" }
        }
                ,
                temperature = 0.5
            };

            var requestBody = JsonSerializer.Serialize(request);
            var content = new StringContent(requestBody, Encoding.UTF8, "application/json");
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _myApiKey);

            var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);

            // Add this logging to inspect the OpenAI API response
            var responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine("OpenAI API Response:");
            Console.WriteLine(responseBody);  // This will log the raw response body

            if (!response.IsSuccessStatusCode)
                throw new Exception($"AI request failed with status code {response.StatusCode}: {responseBody}");

            // Parse response to extract JSON content
            using var document = JsonDocument.Parse(responseBody);
            var messageContent = document.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();
            Console.WriteLine(document.RootElement);
            if (string.IsNullOrEmpty(messageContent))
                throw new Exception("AI response is empty.");

            Console.WriteLine("************** JSON Response **************");
            Console.WriteLine(messageContent);
            Console.WriteLine("*******************************************");
            messageContent= messageContent.Replace("```json", "");
            messageContent= messageContent.Replace("```", "");
            // Deserialize the JSON response into the AIResponse object
            AIResponse aiResponse = JsonSerializer.Deserialize<AIResponse>(messageContent, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
            
            if (aiResponse == null)
                throw new Exception("Failed to parse AI response.");
            await _IaIRepository.AddAiResponseAsync(aiResponse, userId,fileName);
        }

        private string ExtractTextFromPdf(IFormFile pdfStream)
        {
            using (var stream = pdfStream.OpenReadStream())
            using (PdfReader reader = new PdfReader(stream))
            using (PdfDocument pdfDoc = new PdfDocument(reader))
            {
                StringWriter stringWriter = new StringWriter();

                for (int page = 1; page <= pdfDoc.GetNumberOfPages(); page++)
                {
                    string pageText = PdfTextExtractor.GetTextFromPage(pdfDoc.GetPage(page));
                    stringWriter.Write(pageText);
                }

                return stringWriter.ToString();
            }
        }


        private string ExtractTextFromDocx(IFormFile resumeFile)
        {
            if (resumeFile == null || resumeFile.Length == 0)
            {
                throw new ArgumentException("File is missing or empty.");
            }

            using var stream = new MemoryStream();
            resumeFile.CopyTo(stream);
            stream.Position = 0; // Reset the stream position

            using var doc = DocX.Load(stream);
            return doc.Text;
        }
    
       
        public Task<IEnumerable<AIResponse>> GetAllAIResponsesAsync()
        {
            return _IaIRepository.GetAllAIResponsesAsync();
        }

        public Task<IEnumerable<AIResponse>> GetFilesByUserIdAsync(int userId)
        {
            return _IaIRepository.GetFilesByUserIdAsync(userId);
        }

        public async Task DeleteAllAIResponsesAsync()
        {
            await _IaIRepository.DeleteAllAIResponsesAsync();
        }
    }
}




