using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.DTOs
{
    public class SearchCriteriaDTO
    {

        public int UserId { get; set; }
        public Dictionary<string, string> Filters { get; set; }


    }
}
