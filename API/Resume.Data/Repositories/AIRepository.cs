using Azure;
using Microsoft.EntityFrameworkCore;
using Resume.Core.IRepository;
using Resume.Data;

public class AIRepository : IAIRepository
{
    private readonly ResumeContext _context;

    public AIRepository(ResumeContext context)
    {
        _context = context;
    }

    public async Task<AIResponse> GetAIResponseByIdAsync(int id)
    {
        var response = await _context.AIResponses
            .Include(r => r.User) // להבטיח שהמשתמש יטען יחד עם התשובה
            .FirstOrDefaultAsync(r => r.Id == id);

        return response != null ? response : null;
    }

    public async Task AddAiResponseAsync(AIResponse aiResponse, int userId, string fileName,bool existsFile)
    {
        //aiResponse.UserId = userId;
        //aiResponse.FileName = fileName;
        //aiResponse.CreatedAt = DateTime.Now;
        if (existsFile)
        {
            var existing = await _context.AIResponses
           .FirstOrDefaultAsync(a => a.FileName == fileName && a.UserId == userId);
            if (existing != null)
            {
                existing.FirstName = aiResponse.FirstName ?? existing.FirstName;
                existing.FatherName = aiResponse.FatherName ?? existing.FatherName;
                existing.MotherName = aiResponse.MotherName ?? existing.MotherName;
                existing.LastName = aiResponse.LastName ?? existing.LastName;
                existing.Address = aiResponse.Address ?? existing.Address;
                existing.PlaceOfStudy = aiResponse.PlaceOfStudy ?? existing.PlaceOfStudy;
                existing.Occupation = aiResponse.Occupation ?? existing.Occupation;
                existing.Height = aiResponse.Height ?? existing.Height;
                existing.Age = aiResponse.Age ?? existing.Age;
                existing.UpdatedAt = DateTime.Now;
                _context.AIResponses.Update(existing);
            }
           
        }
        else
        {
            await _context.AIResponses.AddAsync(aiResponse);

        }
        Console.WriteLine(aiResponse.Id);
       // bool fileExists = await _context.AIResponses
       //.AnyAsync(r => r.UserId == userId && r.FileName == fileName);
       // if (fileExists)
       // {
       //     throw new Exception($"A file named '{fileName}' already exists for this user.");
       // }
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<AIResponse>> GetAllAIResponsesAsync()
    {
        //return await _context.AIResponses.Include(u=>u.User).ToListAsync();
        return await _context.AIResponses
    .Where(r => r.User != null)
    .Include(r => r.User)
    .ToListAsync();

    }

    public async Task<IEnumerable<AIResponse>> GetFilesByUserIdAsync(int userId)
    {
        return await _context.AIResponses
         .Where(r => r.UserId == userId)
         .ToListAsync();
    }

    public async Task DeleteAllAIResponsesAsync()
    {
        var invalidResponses = await GetAllAIResponsesAsync();

        //_context.AIResponses.RemoveRange(invalidResponses);
        //await _context.SaveChangesAsync();

        if (invalidResponses.Any())
        {
            _context.AIResponses.RemoveRange(invalidResponses);
            await _context.SaveChangesAsync();
        }


    }

    public async Task DeleteAiResponseById(int aiResponseId)
    {
        var resume = await _context.AIResponses.FirstOrDefaultAsync(r => r.Id == aiResponseId);

        if (resume == null)
            throw new Exception($"AIResponse with ID {aiResponseId} not found.");

        _context.AIResponses.Remove(resume);
        await _context.SaveChangesAsync();
    }

    public async Task<AIResponse> UpdateAIResponseAsync(AIResponse response)
    {
        _context.AIResponses.Update(response);
        await _context.SaveChangesAsync();
        return response;
    }

    public async Task<bool> CheckFileExistAsync(string fileName, int userId)
    {
        return await _context.AIResponses
       .AnyAsync(a => a.FileName == fileName && a.UserId == userId);

    }

    public Task AddAiResponseAsync(AIResponse aiResponse, int userId, string fileName)
    {
        throw new NotImplementedException();
    }

    
}
