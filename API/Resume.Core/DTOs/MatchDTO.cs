using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.DTOs
{
    public class MatchDTO
    {
        public int MatchID { get; set; }
        public int ResumefileID1 { get; set; }
        public int ResumefileID2 { get; set; }
        public DateTime MatchDate { get; set; }
        public string Status { get; set; }
    }
}
