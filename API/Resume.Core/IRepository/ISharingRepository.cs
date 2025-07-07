using Resume.Core.Models;

namespace Resume.Core.IRepository
{
    public interface ISharingRepository
    {
        //Sharing GetSharingById(int id);
        //List<IEnumerable<Sharing>> GetAllSharing();
        //Sharing AddSharing(Sharing entity);
        //Sharing UpdateSharing(Sharing entity);
        //Sharing DeleteSharing(int id);
        Task<bool> IsAlreadySharedAsync(int resumeFileId, int sharedWithUserId);
        Task AddSharingAsync(Sharing sharing);
        Task<User?> GetUserByEmailAsync(string email);
        Task<AIResponse?> GetResumeFileByIdAsync(int fileId);
        Task<IEnumerable<Sharing>> GetAllSharingsAsync();
        Task<IEnumerable<Sharing>> GetAllSharingsByIdAsync(int userId);
        
        Task<string> ShareFileWithAllAsync(int userId, int resumeFileId);
        Task DeleteAllSharingAsync();
    }
}