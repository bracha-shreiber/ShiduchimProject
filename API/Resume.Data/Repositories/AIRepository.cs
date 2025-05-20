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

    public async Task AddAiResponseAsync(AIResponse aiResponse, int userId, string fileName)
    {
        aiResponse.UserId = userId;
        aiResponse.FileName = fileName;
        aiResponse.CreatedAt = DateTime.Now;
        await _context.AIResponses.AddAsync(aiResponse);
        Console.WriteLine(aiResponse.Id);
        //var user = await _context.Users
        //    .FirstOrDefaultAsync(u => u.ID == userId);

        //if (user == null)
        //{
        //    throw new Exception("User not found");
        //}

        //user.Files.Add(aiResponse);
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

}
