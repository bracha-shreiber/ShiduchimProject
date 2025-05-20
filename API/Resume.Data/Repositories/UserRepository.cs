using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Crypto.Prng;
using Resume.Core.IRepository;
using Resume.Core.Models;
using Resume.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ResumeContext _context;
        public UserRepository(ResumeContext context)
        {
            _context = context;
        }

        public async Task<User> GetUserById(int id)
        {
            return await _context.Users.FindAsync(id);
        }
        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }
        public async Task<User> AddUser(User entity)
        {
            _context.Users.Add(entity);
            await _context.SaveChangesAsync();
            return entity;  
        }
        public async Task UpdateUser(int id, User entity)
        {
            _context.Users.Update(entity);
            await _context.SaveChangesAsync();
            
        }
        public async Task DeleteUser(int id)
        {
            var user = await GetUserById(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

    }
}
