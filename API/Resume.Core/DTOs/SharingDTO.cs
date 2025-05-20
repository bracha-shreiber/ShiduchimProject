using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.DTOs
{
    public class SharingDTO
    {
        public int ShareID { get; set; }
        public int ResumefileID { get; set; }
        public int SharedWithUserID { get; set; }
        public DateTime SharedAt { get; set; }
    }
}
