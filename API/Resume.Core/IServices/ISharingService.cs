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
        Task<string> ShareFileAsync(int resumeFileId, string targetEmail);
        Task<IEnumerable<Sharing>> GetAllSharingsAsync();
    }
}
