using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Resume.Core.Models
{
    public class Sharing
    {
        [Key]
        public int ShareID { get; set; }
        public int ResumefileID { get; set; }
        public int SharedWithUserID { get; set; }
        public DateTime SharedAt { get; set; }
        public ResumeFile Resumefile { get; set; } 
        public List<User> SharedWithUser { get; set; }
    }
}
