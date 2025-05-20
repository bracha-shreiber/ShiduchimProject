namespace Resume.API.PostModels
{
    public class MatchPostModel
    {
        public int ResumefileID1 { get; set; }
        public int ResumefileID2 { get; set; }
        public DateTime MatchDate { get; set; }
        public string Status { get; set; }
    }
}
