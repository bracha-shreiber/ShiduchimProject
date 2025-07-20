using System.ComponentModel.DataAnnotations;

namespace Resume.API.PostModels
{
    public class UserPostModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }

    }
}
