using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.IServices
{
    public interface ISharingService
    {
        //Task<string> ShareFileAsync(int resumeFileId, string targetEmail);
        Task<IEnumerable<Sharing>> GetAllSharingsAsync();
        Task<IEnumerable<Sharing>> GetAllSharingsByIdAsync( int userId);

       
            Task<string> ShareFileAsync(int userId, int resumeFileId, string? targetEmail);
            Task<string> ShareFileWithAllAsync(int userId, int resumeFileId); // חדש

        Task DeleteAllSharingAsync();
        Task<IEnumerable<Sharing>> GetSharingsByUserAsync(int userId);
        Task DeleteSharedFile(int shareId);
    }
}
