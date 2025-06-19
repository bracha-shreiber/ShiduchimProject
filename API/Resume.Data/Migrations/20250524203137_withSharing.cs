using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resume.Data.Migrations
{
    /// <inheritdoc />
    public partial class withSharing : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Sharings_SharingShareID",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_SharingShareID",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SharingShareID",
                table: "Users");

            migrationBuilder.CreateIndex(
                name: "IX_Sharings_SharedWithUserID",
                table: "Sharings",
                column: "SharedWithUserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Sharings_Users_SharedWithUserID",
                table: "Sharings",
                column: "SharedWithUserID",
                principalTable: "Users",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sharings_Users_SharedWithUserID",
                table: "Sharings");

            migrationBuilder.DropIndex(
                name: "IX_Sharings_SharedWithUserID",
                table: "Sharings");

            migrationBuilder.AddColumn<int>(
                name: "SharingShareID",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_SharingShareID",
                table: "Users",
                column: "SharingShareID");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Sharings_SharingShareID",
                table: "Users",
                column: "SharingShareID",
                principalTable: "Sharings",
                principalColumn: "ShareID");
        }
    }
}
