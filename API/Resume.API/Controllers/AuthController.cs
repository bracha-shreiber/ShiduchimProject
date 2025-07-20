using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Crypto;
using Resume.API.PostModels;
using Resume.Core.DTOs;
using Resume.Core.IServices;
using Resume.Core.Models;
using Resume.Data;


namespace Resume.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IMapper _mapper;
        private readonly ResumeContext _context;

        public AuthController(IAuthService authService, IUserService userService, IMapper mapper,ResumeContext resumeContext)
        {
            _authService = authService;
            _mapper = mapper;
            _context = resumeContext;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login login)
        {
            try
            {
                var (token, user) = await _authService.LoginAsync(login);
                var dtoUser = _mapper.Map<UserDTO>(user);
                return Ok(new { user = dtoUser, token = token }); // ✅ changed to lowercase
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized();
            }
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserPostModel userPost)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == userPost.Email);
                if (existingUser != null)
                {
                    return BadRequest("This email is already registered.");
                }

                var passwordHash = BCrypt.Net.BCrypt.HashPassword(userPost.Password);

                var user = new User
                {
                    Username = userPost.Username,
                    Phone = userPost.Phone,
                    Email = userPost.Email,
                    Address = userPost.Address,
                    PasswordHash = passwordHash,
                };

                var (token, savedUser) = await _authService.RegisterUserAsync(user);
                var dtoUser = _mapper.Map<UserDTO>(savedUser);

                return Ok(new { user = dtoUser, token = token });
            }
            catch (UnauthorizedAccessException ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
