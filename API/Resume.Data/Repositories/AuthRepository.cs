using Microsoft.EntityFrameworkCore;
using Resume.Core.IRepository;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace Resume.Data.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ResumeContext _context;

        public AuthRepository(ResumeContext context)
        {
            _context = context;
        }
        
        public async Task<User> GetUserByEmailAndPasswordAsync(string email, string password)
        {
            bool isPasswordValid = false;
            User user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user != null)
            {
                isPasswordValid = BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
            }
            if (isPasswordValid)
                return user;
            return null;
        }
        public async Task<User> CreateUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            User user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            return user;
        }
    }
}
