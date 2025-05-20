namespace Resume.API.PostModels
{
    public class ResumeFilePostModel
    {
        //public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string? ResumeFilePath { get; set; }
        public string? ImageFilePath { get; set; }
    }
}
