using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

[ApiController]
[Route("api/upload")]
public class UploadController : ControllerBase
{
    private readonly IAmazonS3 _s3Client;

    public UploadController(IAmazonS3 s3Client)
    {
        _s3Client = s3Client;
    }
    private string GetContentType(string filename)
    {
        var provider = new FileExtensionContentTypeProvider();
        if(!provider.TryGetContentType(filename,out var contentType))
        {
            contentType = "application/pdf";
        }
        return contentType;
    }
    [HttpGet("presigned-url")]
    public async Task<IActionResult> GetPresignedUrl([FromQuery] string fileName)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = "filesresume.testpnoren",
            Key = fileName,
            Verb = HttpVerb.PUT,
            Expires = DateTime.UtcNow.AddMinutes(5),
            ContentType = GetContentType(fileName)
        };
        string url = _s3Client.GetPreSignedURL(request);
        return Ok(new { url });
    }
}
