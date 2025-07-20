
using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resume.Data.Migrations
{
    /// <inheritdoc />
    public partial class withUpdateAt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AIResponses_FileName",
                table: "AIResponses");

            migrationBuilder.AlterColumn<string>(
                name: "FileName",
                table: "AIResponses",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "AIResponses",
                type: "datetime(6)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "AIResponses");

            migrationBuilder.AlterColumn<string>(
                name: "FileName",
                table: "AIResponses",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_AIResponses_FileName",
                table: "AIResponses",
                column: "FileName",
                unique: true);
        }
    }
}
