using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Resume.Core.DTOs;
using Resume.Core.IServices;

[ApiController]
[Route("api/[controller]")]
public class AIResponseController : ControllerBase
{
    private readonly IAIService _aiService;
    private readonly IMapper _mapper;

    public AIResponseController(IAIService aiService, IMapper mapper)
    {
        _aiService = aiService;
        _mapper = mapper;
    }
    [HttpGet]
    public async Task<IEnumerable<AIResponse>> GetAll()
    {
        return await _aiService.GetAllAIResponsesAsync();
        
    }
    [HttpGet("{id}")]
    public async Task<IActionResult> GetAIResponseById(int id)
    {
        var response = await _aiService.GetAIResponseById(id);
        if (response == null)
        {
            return NotFound();
        }
        return Ok(response);
    }
    [HttpGet("{userId}/userId")]
    public async Task<IEnumerable<AIResponse>> GetFilesByUserIdAsync(int userId)
    {
        return await _aiService.GetFilesByUserIdAsync(userId);
    }
    [HttpPost]
    public async Task<IActionResult> AddAIResponse([FromForm] AIResponseRequestDto request)
    {
        if (request.ResumeFile == null || request.ResumeFile.Length == 0)
        {
            return BadRequest("Resume file is missing.");
        }

        try
        {
            await _aiService.AddAiResponseAsync(request.ResumeFile, request.UserId);
            return Ok("Resume successfully analyzed and saved.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred: {ex.Message}");
        }
    }
    [HttpDelete("all")]
public async Task<IActionResult> DeleteAllAIResponses()
{
    await _aiService.DeleteAllAIResponsesAsync();
    return NoContent(); // 204 No Content
}
    [HttpDelete("{aiResponseId}")]
    public async Task<IActionResult> DeleteAiResponseById(int aiResponseId)
    {
        await _aiService.DeleteAiResponseById(aiResponseId);
        return NoContent();
    }

}
