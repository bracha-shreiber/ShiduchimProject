using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resume.Data.Migrations
{
    /// <inheritdoc />
    public partial class _1234 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ResumeFiles_Users_UserID",
                table: "ResumeFiles");

            migrationBuilder.DropIndex(
                name: "IX_ResumeFiles_UserID",
                table: "ResumeFiles");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "ResumeFiles");

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "AIResponses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "AIResponses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AIResponses_UserId",
                table: "AIResponses",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AIResponses_Users_UserId",
                table: "AIResponses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AIResponses_Users_UserId",
                table: "AIResponses");

            migrationBuilder.DropIndex(
                name: "IX_AIResponses_UserId",
                table: "AIResponses");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "AIResponses");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "AIResponses");

            migrationBuilder.AddColumn<int>(
                name: "UserID",
                table: "ResumeFiles",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ResumeFiles_UserID",
                table: "ResumeFiles",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_ResumeFiles_Users_UserID",
                table: "ResumeFiles",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID");
        }
    }
}
