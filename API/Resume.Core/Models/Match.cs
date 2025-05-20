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
    public class Match
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MatchID { get; set; }
//[ForeignKey("ResumeFile1")]
        public int ResumefileID1 { get; set; }
        public ResumeFile Resumefile1 { get; set; }
        //[ForeignKey("ResumeFile2")]
        public int ResumefileID2 { get; set; }
        public ResumeFile Resumefile2 { get; set; }

        public DateTime MatchDate { get; set; }
        public string Status { get; set; }
       
    }
}
