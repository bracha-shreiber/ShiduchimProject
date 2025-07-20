using Microsoft.EntityFrameworkCore;
using Resume.Core.IRepository;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Data.Repositories
{
    public class SharingRepository : ISharingRepository
    {
        private readonly ResumeContext _context;

        public SharingRepository(ResumeContext context)
        {
            _context = context;
        }

        public async Task<bool> IsAlreadySharedAsync(int resumeFileId, int sharedWithUserId)
        {
            return await _context.Sharings.AnyAsync(s =>
                s.ResumefileID == resumeFileId &&
                s.SharedWithUserID == sharedWithUserId);
        }

        public async Task AddSharingAsync(Sharing sharing)
        {
            sharing.SharedByUserEmail = _context.Users.FirstOrDefault(u => u.ID == sharing.SharedByUserID)?.Email;
            await _context.Sharings.AddAsync(sharing);
            await _context.SaveChangesAsync();
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<AIResponse?> GetResumeFileByIdAsync(int fileId)
        {
            return await _context.AIResponses.FindAsync(fileId);
        }

        public async Task<IEnumerable<Sharing>> GetAllSharingsAsync()
        {
            return await _context.Sharings.Include(s => s.Resumefile)
        .Include(s => s.SharedWithUser)
        .ToListAsync();
        }

        public async Task<string> ShareFileWithAllAsync(int userId, int resumeFileId)
        {
            var file = await _context.AIResponses.FindAsync(resumeFileId);
            if (file == null)
                return "Resume file not found.";
            var allUsers = await _context.Users.Where(u=>u.ID!=userId).ToListAsync();
            foreach (var user in allUsers)
            {
                var alreadyShared = await _context.Sharings
                    .AnyAsync(s => s.ResumefileID == resumeFileId && s.SharedWithUserID == user.ID);
                if (!alreadyShared)
                {
                    _context.Sharings.Add(new Sharing
                    {
                        ResumefileID = resumeFileId,
                        SharedByUserID = userId,
                        SharedByUserEmail = _context.Users.FirstOrDefault(u => u.ID == userId)?.Email,
                        SharedWithUserID = user.ID,
                        SharedAt = DateTime.UtcNow
                    });
                }
            }
            await _context.SaveChangesAsync();
            return "The file was successfully shared with all users.";
        }

        public async Task<IEnumerable<Sharing>> GetAllSharingsByIdAsync(int userId)
        {
            return await _context.Sharings.Where(s=>s.SharedWithUserID==userId).Include(s => s.Resumefile)
       .Include(s => s.SharedWithUser)
       .ToListAsync();
        }

        public async Task DeleteAllSharingAsync()
        {
            var invalidSharings = await GetAllSharingsAsync();

            //_context.AIResponses.RemoveRange(invalidResponses);
            //await _context.SaveChangesAsync();

            if (invalidSharings.Any())
            {
                _context.Sharings.RemoveRange(invalidSharings);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Sharing>> GetSharingsByUserAsync(int userId)
        {
            return await _context.Sharings.Where(s => s.SharedWithUserID == userId).ToListAsync();
        }

        public async Task DeleteSharedFile(int shareId)
        {
            var shareFile = await _context.Sharings.FirstOrDefaultAsync(r => r.ShareID == shareId);

            if (shareFile == null)
                throw new Exception($"Shared file with ID {shareId} not found.");

            _context.Sharings.Remove(shareFile);
            await _context.SaveChangesAsync();
        }

    }
}



