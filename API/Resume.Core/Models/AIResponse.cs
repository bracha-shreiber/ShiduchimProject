using Resume.Core.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class AIResponse
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public int UserId { get; set; }
    // Add this navigation property
    public User User { get; set; }

    public string FileName { get; set; }
    public string? FirstName { get; set; }
    public string? FatherName { get; set; }
    public string? MotherName { get; set; }
    public string? LastName { get; set; }
    public string? Address { get; set; }
    public string? PlaceOfStudy { get; set; }
    public string? Occupation { get; set; }
    [JsonConverter(typeof(FlexibleStringConverter))]
    public string? Height { get; set; }
    [JsonConverter(typeof(FlexibleStringConverter))]
    public string? Age { get; set; }
    public DateTime? CreatedAt { get; set; } 
    public DateTime? UpdatedAt { get; set; }

}
