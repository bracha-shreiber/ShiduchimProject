using Resume.Core.Models;

namespace Resume.Core.IRepository
{
    public interface IResumefileRepository
    {
        Task<ResumeFile> GetResumeFileById(int id);
        Task<IEnumerable<ResumeFile>> GetAllResumeFiles();
        Task<ResumeFile> AddResumeFile(ResumeFile entity);
        Task UpdateResumeFile(ResumeFile entity);
        Task DeleteResumeFile(int id);
    }
}