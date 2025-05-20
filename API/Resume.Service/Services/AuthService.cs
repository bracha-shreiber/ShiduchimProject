using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Resume.Core.IRepository;
using Resume.Core.IServices;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Service.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _configuration;
        private readonly ILogger<AuthService> _logger;

        public AuthService(IAuthRepository authRepository, IConfiguration configuration, ILogger<AuthService> logger)
        {
            _authRepository = authRepository;
            _configuration = configuration;
            _logger = logger;
        }

        public async Task<(string token, User user)> LoginAsync(Login login)
        {
            var user = await _authRepository.GetUserByEmailAndPasswordAsync(login.Email, login.Password);

            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid credentials.");
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = _configuration["Jwt:Key"];
            if (string.IsNullOrEmpty(key))
            {
                _logger.LogError("Jwt:Key is not configured.");
                throw new ArgumentNullException("Jwt:Key");
            }

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, login.Email)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return (tokenString, user);
        }

        public async Task<(string token, User user)> RegisterUserAsync(User user)
        {
            var existingUser = await _authRepository.GetUserByEmailAsync(user.Email);
            if (existingUser != null)
            {
                throw new UnauthorizedAccessException("User already exists.");
            }

            // Save user to DB
            var savedUser = await _authRepository.CreateUserAsync(user);
            user = await _authRepository.GetUserByEmailAsync(user.Email); // Re-fetch to ensure UserID is populated

            // Generate JWT token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = _configuration["Jwt:Key"];
            if (string.IsNullOrEmpty(key))
            {
                _logger.LogError("Jwt:Key is not configured.");
                throw new ArgumentNullException("Jwt:Key");
            }

            var expiryInDays = _configuration["Jwt:ExpiryInDays"];
            if (string.IsNullOrEmpty(expiryInDays))
            {
                _logger.LogError("Jwt:ExpiryInDays is not configured.");
                throw new ArgumentNullException("Jwt:ExpiryInDays");
            }

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
            new Claim(ClaimTypes.NameIdentifier, savedUser.ID.ToString()),
            new Claim(ClaimTypes.Email, savedUser.Email)
        }),
                Expires = DateTime.UtcNow.AddDays(Convert.ToDouble(expiryInDays)),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return (tokenHandler.WriteToken(token), savedUser);
        }

    }
}