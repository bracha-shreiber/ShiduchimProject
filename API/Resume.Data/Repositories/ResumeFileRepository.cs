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
    public class ResumeFileRepository : IResumefileRepository
    {
        private readonly ResumeContext _context;
        public ResumeFileRepository(ResumeContext context)
        {
            _context=context;
        }
        public async Task<IEnumerable<ResumeFile>> GetAllResumeFiles()
        {
            return await _context.ResumeFiles.ToListAsync();
        }
        public async Task<ResumeFile> AddResumeFile(ResumeFile entity)
        {
            _context.ResumeFiles.Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        public async Task<ResumeFile> GetResumeFileById(int id)
        {
            return await _context.ResumeFiles.FindAsync(id);
        }
        public async Task DeleteResumeFile(int id)
        {
            var resumeFile = await GetResumeFileById(id);
            if (resumeFile != null)
            {
                _context.ResumeFiles.Remove(resumeFile);
                _context.SaveChanges();
            }
        }
        public async Task UpdateResumeFile(ResumeFile entity)
        {
            _context.ResumeFiles.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<AIResponse>> SearchFilesAsync(int userId, string field, string value)
        {
            IQueryable<AIResponse> query = _context.AIResponses.Where(f=>f.UserId==userId);

            value = value.Trim().ToLower();

            switch (field.ToLower())
            {
                case "firstname":
                    query = query.Where(f => f.FirstName.ToLower().Contains(value));
                    break;
                case "lastname":
                    query = query.Where(f => f.LastName.ToLower().Contains(value));
                    break;
                case "fathername":
                    query = query.Where(f => f.FatherName.ToLower().Contains(value));
                    break;
                case "mothername":
                    query = query.Where(f => f.MotherName.ToLower().Contains(value));
                    break;
                case "height":
                    query = query.Where(f => f.Height.ToLower().Contains(value));
                    break;
                case "age":
                    query = query.Where(f => f.Age.ToLower().Contains(value));
                    break;
                default:
                    return new List<AIResponse>(); // or throw error
            }

            return await query.ToListAsync();
        }
    }
}
