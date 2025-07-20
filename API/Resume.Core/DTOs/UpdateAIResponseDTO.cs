using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.DTOs
{
    public class UpdateAIResponseDTO
    {
        public string? FirstName { get; set; }
        public string? FatherName { get; set; }
        public string? MotherName { get; set; }
        public string? LastName { get; set; }
        public string? Address { get; set; }
        public string? PlaceOfStudy { get; set; }
        public string? Occupation { get; set; }
        public string? Height { get; set; }
        public string? Age { get; set; }
    }
}
