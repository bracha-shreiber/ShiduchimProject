using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Resume.API.PostModels;
using Resume.Core.IServices;
using Resume.Core.Models;
using System.Runtime.CompilerServices;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Resume.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumeFileController : ControllerBase
    {
        private readonly IResumeFileService _resumeFileService;
        private readonly IMapper _mapper;

        public ResumeFileController(IResumeFileService resumeFileService,IMapper mapper)
        {
            _resumeFileService = resumeFileService;
            _mapper = mapper;
        }

        // GET: api/<ResumeFileController>
        [HttpGet]
        public async Task<IActionResult> GetAllResumes()
        {
            var resumes = await _resumeFileService.GetAllResumeFiles();
            return Ok(resumes);
        }

        // GET api/<ResumeFileController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetResumeById(int id)
        {
            var resume = await _resumeFileService.GetResumeFileById(id);
            if (resume == null)
            {
                return NotFound();
            }
            return Ok(resume);
        }

        // POST api/<ResumeFileController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ResumeFilePostModel value)
        {
            var resumeFile = new ResumeFile
            {
                FirstName = value.FirstName,
                LastName = value.LastName,
                Age = value.Age,
                Gender=value.Gender,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };
            await _resumeFileService.AddResumeFile(resumeFile);
            return NoContent();
        }

        // PUT api/<ResumeFileController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]ResumeFile value)
        {
            
            await _resumeFileService.UpdateResumeFile(value);
            return NoContent();
        }

        // DELETE api/<ResumeFileController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
        
            await _resumeFileService.DeleteResumeFile(id);
            return NoContent();
        }
    }
}
