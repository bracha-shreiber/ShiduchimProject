using Microsoft.EntityFrameworkCore;
using Resume.Core.DTOs;
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

        public async Task<IEnumerable<AIResponse>> SearchFilesAsync(SearchCriteriaDTO criteria)
        {
            IQueryable<AIResponse> query = _context.AIResponses.Where(f => f.UserId == criteria.UserId);

            if (criteria.Filters != null && criteria.Filters.Any())
            {
                foreach (var filter in criteria.Filters)
                {
                    string key = filter.Key?.ToLower() ?? ""; // Fixed: Changed 'filter.Field' to 'filter.Key'
                    string value = filter.Value?.Trim().ToLower() ?? "";

                    if (string.IsNullOrEmpty(value))
                        continue;

                    switch (key)
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
                        case "placeofstudy":
                            query = query.Where(f => f.PlaceOfStudy.ToLower().Contains(value));
                            break;
                        case "occupation":
                            query = query.Where(f => f.Occupation.ToLower().Contains(value));
                            break;
                        case "city":
                            query = query.Where(f => f.Address.ToLower().Contains(value));
                            break;

                        default:
                            // Ignore unknown fields or handle as needed
                            break;
                    }
                }
            }

            return await query.ToListAsync();
        }

    }
}
