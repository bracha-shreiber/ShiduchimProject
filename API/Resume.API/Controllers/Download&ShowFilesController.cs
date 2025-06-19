using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Resume.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Download_ShowFilesController : ControllerBase
    {
        private readonly IAmazonS3 _s3Client;
        private readonly HttpClient _httpClient;

        public Download_ShowFilesController(IAmazonS3 s3Client, HttpClient httpClient)
        {
            _s3Client = s3Client;
            _httpClient = httpClient;
        }

        [HttpGet("download-url")]
        public async Task<IActionResult> GetDownloadUrl([FromQuery] string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return BadRequest("File name is required.");
            }

            try
            {
                string decodedFileName = Uri.UnescapeDataString(fileName);

                var request = new GetPreSignedUrlRequest
                {
                    BucketName = "filesresume.testpnoren",
                    Key = decodedFileName,
                    Verb = HttpVerb.GET,
                    Expires = DateTime.UtcNow.AddMinutes(5),

                    //ResponseHeaderOverrides = new ResponseHeaderOverrides
                    //{
                    //    ContentDisposition = "inline"
                    //}
                    ResponseHeaderOverrides = new ResponseHeaderOverrides
                    {
                        ContentDisposition = "attachment"
                    }

                };

                string url = _s3Client.GetPreSignedURL(request);

                return Ok(new { url });
            }
            catch (AmazonS3Exception ex)
            {
                // ניתן להוסיף לוג כאן
                return StatusCode(500, $"Error accessing S3: {ex.Message}");
            }
            catch (Exception ex)
            {
                // ניתן להוסיף לוג כאן
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }


        [HttpGet("show-file-content")]
        public async Task<IActionResult> GetShowUrl([FromQuery] string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return BadRequest("File name is required.");
            }

            try
            {
                string decodedFileName = Uri.UnescapeDataString(fileName);

                var request = new GetPreSignedUrlRequest
                {
                    BucketName = "filesresume.testpnoren",
                    Key = decodedFileName,
                    Verb = HttpVerb.GET,
                    Expires = DateTime.UtcNow.AddMinutes(5),

                    ResponseHeaderOverrides = new ResponseHeaderOverrides
                    {
                        ContentDisposition = "inline"
                    }
                    //ResponseHeaderOverrides = new ResponseHeaderOverrides
                    //{
                    //    ContentDisposition = "attachment"
                    //}

                };

                string url = _s3Client.GetPreSignedURL(request);

                return Ok(new { url });
            }
            catch (AmazonS3Exception ex)
            {
                // ניתן להוסיף לוג כאן
                return StatusCode(500, $"Error accessing S3: {ex.Message}");
            }
            catch (Exception ex)
            {
                // ניתן להוסיף לוג כאן
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
        //public async Task<string> GetShowUrlAsync(string fileName)
        //{
        //    var request = new GetPreSignedUrlRequest
        //    {
        //        BucketName = "filesresume.testpnoren",
        //        Key = fileName,
        //        Verb = HttpVerb.GET,
        //        Expires = DateTime.UtcNow.AddDays(300),
        //        ResponseHeaderOverrides = new ResponseHeaderOverrides
        //        {
        //            ContentDisposition = "inline"
        //        }
        //    };

        //    return _s3Client.GetPreSignedURL(request);
        //}

    }
}