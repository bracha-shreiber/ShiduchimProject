using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.Models
{
    public class GptRequest
    {
        public string Prompt { get; set; }
        public string Question { get; set; }
    }
}
