using Resume.Core.IRepository;
using Resume.Core.IServices;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Service.Services
{

    public class SharingService : ISharingService
    {
        private readonly ISharingRepository _repository;

        public SharingService(ISharingRepository repository)
        {
            _repository = repository;
        }

        public async Task<string> ShareFileAsync(int resumeFileId, string targetEmail)
        {
            var file = await _repository.GetResumeFileByIdAsync(resumeFileId);
            if (file == null)
                return "Resume file not found.";

            var user = await _repository.GetUserByEmailAsync(targetEmail);
            if (user == null)
                return "Target user not found.";

            if (await _repository.IsAlreadySharedAsync(resumeFileId, user.ID))
                return "File already shared with this user.";

            var sharing = new Sharing
            {
                ResumefileID = resumeFileId,
                SharedWithUserID = user.ID,
                SharedAt = DateTime.Now,
            };

            await _repository.AddSharingAsync(sharing);
            return "File shared successfully.";
        }
        public async Task<IEnumerable<Sharing>> GetAllSharingsAsync()
        {
            return await _repository.GetAllSharingsAsync();
        }
    }
}


