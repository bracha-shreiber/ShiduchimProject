using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.DTOs
{
    public class SharingDTO
    {
        public int UserId { get; set; }
        public int ResumeFileId { get; set; }
            public string? TargetEmail { get; set; }
        public bool ShareAll { get; set; }
    }
}
