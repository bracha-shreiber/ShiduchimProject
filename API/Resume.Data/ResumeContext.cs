using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using Resume.Core.Models;
using Match = Resume.Core.Models.Match;
namespace Resume.Data
{
    public class ResumeContext : DbContext
    {
        public ResumeContext(DbContextOptions<ResumeContext> options) : base(options)
        {
        }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<ResumeFile> ResumeFiles { get; set; }
        public virtual DbSet<Sharing> Sharings { get; set; }
        public virtual DbSet<Match> Matches { get; set; }
        public virtual DbSet<AIResponse> AIResponses { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=Shiduchim");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Match>()
               .HasKey(m => m.MatchID);

            modelBuilder.Entity<Match>()
                .HasOne(m => m.Resumefile1)
                .WithMany() // No navigation property in ResumeFile for Matches
                .HasForeignKey(m => m.ResumefileID1)
                .OnDelete(DeleteBehavior.Restrict); // Prevent cascading delete

            modelBuilder.Entity<Match>()
                .HasOne(m => m.Resumefile2)
                .WithMany() // No navigation property in ResumeFile for Matches
                .HasForeignKey(m => m.ResumefileID2)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>()
                .HasMany(u => u.Files)
                .WithOne(f => f.User)
                .HasForeignKey(f => f.UserId)
                .OnDelete(DeleteBehavior.Cascade); // or DeleteBehavior.Restrict if needed

            modelBuilder.Entity<AIResponse>()
                .HasOne(a => a.User) // AIResponse שייך ל-User אחד
                .WithMany(u => u.Files) // User יכול להיות בעל מספר AIResponses
                .HasForeignKey(a => a.UserId) // הקשר מבוצע לפי ה-UserId
                .OnDelete(DeleteBehavior.Cascade);
        }

    }
}
