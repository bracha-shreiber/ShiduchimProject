﻿using DotNetEnv;
using Resume.Core.DTOs;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.IServices
{
    public interface IResumeFileService
    {
        Task<IEnumerable<ResumeFile>> GetAllResumeFiles();
        Task<ResumeFile> GetResumeFileById(int id);
        Task<ResumeFile> AddResumeFile(ResumeFile resumeFile);
        Task UpdateResumeFile(ResumeFile resumeFile);
        Task DeleteResumeFile(int id);
        Task<IEnumerable<AIResponse>> SearchFilesAsync(SearchCriteriaDTO criteria);
        Task<List<AIResponse>> GetOpenResumesAsync();
    }
}
