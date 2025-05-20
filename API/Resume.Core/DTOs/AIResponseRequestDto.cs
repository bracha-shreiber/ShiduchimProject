using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Resume.Core.DTOs
{
    public class AIResponseRequestDto
    {
        public IFormFile ResumeFile { get; set; }
        public int UserId { get; set; }
    }
}
