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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ShareID { get; set; }

        [ForeignKey("Resumefile")]
        public int ResumefileID { get; set; }

        [ForeignKey("SharedWithUser")]
        public int SharedWithUserID { get; set; }
        public int SharedByUserID { get; set; }
        public DateTime SharedAt { get; set; } = DateTime.UtcNow;
        public AIResponse Resumefile { get; set; }
        public User SharedWithUser { get; set; }
    }
}


