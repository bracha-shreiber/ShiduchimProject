using AutoMapper;
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
    public class ResumeFileService : IResumeFileService
    {
        private readonly IResumefileRepository _resumeFileRepository;
        private readonly IMapper _mapper;
        public ResumeFileService(IResumefileRepository resumefileRepository,IMapper mapper)
        {
            _resumeFileRepository = resumefileRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<ResumeFile>> GetAllResumeFiles()
        {
            return await _resumeFileRepository.GetAllResumeFiles();
        }
        public async Task<ResumeFile> GetResumeFileById(int id)
        {
            return await _resumeFileRepository.GetResumeFileById(id);
        }
        public async Task<ResumeFile> AddResumeFile(ResumeFile resumeFile)
        {
           await _resumeFileRepository.AddResumeFile(resumeFile);
            return resumeFile;
        }

        public async Task DeleteResumeFile(int id)
        {
            await _resumeFileRepository.GetResumeFileById(id);
        }

        public async Task UpdateResumeFile(ResumeFile resumeFile)
        {
            await _resumeFileRepository.UpdateResumeFile(resumeFile);
        }
    }
}
