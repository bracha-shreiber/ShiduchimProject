using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.IRepository
{
    public interface IAIRepository
    {
            Task<AIResponse> GetAIResponseByIdAsync(int id);
            Task AddAiResponseAsync(AIResponse aiResponse, int userId,string fileName);
        Task<IEnumerable<AIResponse>> GetAllAIResponsesAsync();
        Task<IEnumerable<AIResponse>> GetFilesByUserIdAsync(int userId);
        Task DeleteAllAIResponsesAsync();
        Task DeleteAiResponseById(int aiResponseId);
        Task<AIResponse?> UpdateAIResponseAsync(AIResponse dto);
    }
}
