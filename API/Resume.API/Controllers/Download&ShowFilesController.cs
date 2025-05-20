using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Resume.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Download_ShowFilesController : ControllerBase
    {
        private readonly IAmazonS3 _s3Client;
        private readonly HttpClient _httpClient;

        public Download_ShowFilesController(IAmazonS3 s3Client, HttpClient httpClient)
        {
            _s3Client = s3Client;
            _httpClient = httpClient;
        }

        [HttpGet("download-url")]
        public async Task<IActionResult> GetDownloadUrl([FromQuery] string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return BadRequest("File name is required.");
            }

            try
            {
                var request = new GetPreSignedUrlRequest
                {
                    BucketName = "filesresume.testpnoren",
                    Key = fileName,
                    Verb = HttpVerb.GET,
                    Expires = DateTime.UtcNow.AddMinutes(5)
                };
                string url = _s3Client.GetPreSignedURL(request);
                return Ok(new { url });
            }
            catch (AmazonS3Exception ex)
            {
                return StatusCode(500, $"Error accessing S3: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        [HttpGet("show-file-content")]
        public async Task<IActionResult> ShowFileContent([FromQuery] string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return BadRequest("File name is required.");
            }

            // Get the pre-signed URL
            var urlResponse = await GetDownloadUrl(fileName);
            if (urlResponse is BadRequestObjectResult)
            {
                return urlResponse;
            }

            var url = ((OkObjectResult)urlResponse).Value as dynamic;

            try
            {
                var response = await _httpClient.GetAsync(url.url);
                if (response.IsSuccessStatusCode)
                {
                    var fileBytes = await response.Content.ReadAsByteArrayAsync();

                    var contentType = response.Content.Headers.ContentType?.ToString() ?? "application/octet-stream";
                    var fileDownloadName = Path.GetFileName(fileName);

                    return File(fileBytes, contentType, fileDownloadName);
                }

                return StatusCode((int)response.StatusCode, "Error fetching file content.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while fetching the file content: {ex.Message}");
            }
        }


    }
}