using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resume.Data.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sharings_ResumeFiles_ResumefileID",
                table: "Sharings");

            migrationBuilder.AddForeignKey(
                name: "FK_Sharings_AIResponses_ResumefileID",
                table: "Sharings",
                column: "ResumefileID",
                principalTable: "AIResponses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sharings_AIResponses_ResumefileID",
                table: "Sharings");

            migrationBuilder.AddForeignKey(
                name: "FK_Sharings_ResumeFiles_ResumefileID",
                table: "Sharings",
                column: "ResumefileID",
                principalTable: "ResumeFiles",
                principalColumn: "ResumeFileID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
