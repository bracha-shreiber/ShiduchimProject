using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resume.Data.Migrations
{
    /// <inheritdoc />
    public partial class ResumeDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Matches",
                columns: table => new
                {
                    MatchID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ResumefileID1 = table.Column<int>(type: "int", nullable: false),
                    ResumefileID2 = table.Column<int>(type: "int", nullable: false),
                    MatchDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matches", x => x.MatchID);
                });

            migrationBuilder.CreateTable(
                name: "ResumeFiles",
                columns: table => new
                {
                    ResumeFileID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ResumeFilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageFilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResumeFiles", x => x.ResumeFileID);
                });

            migrationBuilder.CreateTable(
                name: "Sharings",
                columns: table => new
                {
                    ShareID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ResumefileID = table.Column<int>(type: "int", nullable: false),
                    SharedWithUserID = table.Column<int>(type: "int", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sharings", x => x.ShareID);
                    table.ForeignKey(
                        name: "FK_Sharings_ResumeFiles_ResumefileID",
                        column: x => x.ResumefileID,
                        principalTable: "ResumeFiles",
                        principalColumn: "ResumeFileID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SharingShareID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserID);
                    table.ForeignKey(
                        name: "FK_Users_Sharings_SharingShareID",
                        column: x => x.SharingShareID,
                        principalTable: "Sharings",
                        principalColumn: "ShareID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Matches_ResumefileID1",
                table: "Matches",
                column: "ResumefileID1");

            migrationBuilder.CreateIndex(
                name: "IX_Matches_ResumefileID2",
                table: "Matches",
                column: "ResumefileID2");

            migrationBuilder.CreateIndex(
                name: "IX_ResumeFiles_UserID",
                table: "ResumeFiles",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Sharings_ResumefileID",
                table: "Sharings",
                column: "ResumefileID");

            migrationBuilder.CreateIndex(
                name: "IX_Users_SharingShareID",
                table: "Users",
                column: "SharingShareID");

            migrationBuilder.AddForeignKey(
                name: "FK_Matches_ResumeFiles_ResumefileID1",
                table: "Matches",
                column: "ResumefileID1",
                principalTable: "ResumeFiles",
                principalColumn: "ResumeFileID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Matches_ResumeFiles_ResumefileID2",
                table: "Matches",
                column: "ResumefileID2",
                principalTable: "ResumeFiles",
                principalColumn: "ResumeFileID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ResumeFiles_Users_UserID",
                table: "ResumeFiles",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sharings_ResumeFiles_ResumefileID",
                table: "Sharings");

            migrationBuilder.DropTable(
                name: "Matches");

            migrationBuilder.DropTable(
                name: "ResumeFiles");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Sharings");
        }
    }
}
