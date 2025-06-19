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
            _context.Sharings.AddAsync(sharing);
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
    }
}



