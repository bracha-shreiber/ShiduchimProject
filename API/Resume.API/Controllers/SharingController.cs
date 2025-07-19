using Microsoft.AspNetCore.Mvc;
using Resume.Core.DTOs;
using Resume.Core.IServices;
using Resume.Core.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Resume.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SharingController : ControllerBase
    {
        private readonly ISharingService _sharingService;

        public SharingController(ISharingService sharingService)
        {
            _sharingService = sharingService;
        }

        //[HttpPost("share")]
        //public async Task<IActionResult> ShareFile([FromBody] SharingDTO request)
        //{
        //    var result = await _sharingService.ShareFileAsync(request.ResumeFileId, request.TargetEmail);

        //    if (result == "Resume file not found." || result == "Target user not found.")
        //        return NotFound(result);

        //    if (result == "File already shared with this user.")
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        [HttpPost("share")]
        public async Task<IActionResult> ShareFile([FromBody] SharingDTO request)
        {
            if (request.ShareAll)
            {
                var result = await _sharingService.ShareFileWithAllAsync(request.UserId,request.ResumeFileId);

                if (result == "Resume file not found.")
                    return NotFound(result);

                return Ok(new { message = result });
            }
            else
            {
                var result = await _sharingService.ShareFileAsync(request.UserId,request.ResumeFileId, request.TargetEmail);

                if (result == "Resume file not found." || result == "Target user not found.")
                    return NotFound(result);

                if (result == "File already shared with this user.")
                    return BadRequest(result);

                return Ok(new { message = result });
            }
        }


        [HttpGet("all-sharings")]
        public async Task<IActionResult> GetAllSharings()
        {
            var sharings = await _sharingService.GetAllSharingsAsync();
            return Ok(sharings);
        }

        [HttpGet("SharingById/{userId}")]
        public async Task<IActionResult> GetAllSharingsById(int userId)
        {
            var sharings = await _sharingService.GetAllSharingsByIdAsync(userId);
            return Ok(sharings);
        }
        [HttpDelete("all")]
        public async Task<IActionResult> DeleteAllSharings()
        {
            await _sharingService.DeleteAllSharingAsync();
            return NoContent(); // 204 No Content
        }
        [HttpGet("{userId}")]
        public async Task<IEnumerable<Sharing>> GetSharingsByUserAsync(int userId)
        {
            return await _sharingService.GetAllSharingsByIdAsync(userId);
        }
        [HttpDelete("{shareId}")]
        public async Task<IActionResult> DeleteSharedFileAsync(int shareId)
        {
            await _sharingService.DeleteSharedFile(shareId);
            return NoContent();

        }

    }
}
