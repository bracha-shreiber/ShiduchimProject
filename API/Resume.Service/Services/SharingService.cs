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

        public async Task<string> ShareFileAsync(int userId, int resumeFileId, string targetEmail)
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
                SharedByUserID = userId,
                
            };

            await _repository.AddSharingAsync(sharing);
            return "File shared successfully.";
        }
        public async Task<IEnumerable<Sharing>> GetAllSharingsAsync()
        {
            return await _repository.GetAllSharingsAsync();
        }
        public async Task<string> ShareFileWithAllAsync(int userId, int resumeFileId)
        {
            return await _repository.ShareFileWithAllAsync(userId, resumeFileId);
        }

        public async Task<IEnumerable<Sharing>> GetAllSharingsByIdAsync(int userId)
        {
            return await _repository.GetAllSharingsByIdAsync(userId);
        }

        public async Task DeleteAllSharingAsync()
        {
            await _repository.DeleteAllSharingAsync();
        }

        public async Task<IEnumerable<Sharing>> GetSharingsByUserAsync(int userId)
        {
            return await _repository.GetSharingsByUserAsync(userId);
        }
        public async Task DeleteSharedFile(int shareId)
        {
            await _repository.DeleteSharedFile(shareId);
        }
    }
}


