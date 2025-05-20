using Resume.Core.DTOs;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.IServices
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetByIdUser(int id);
        Task<User> CreateUser(User dto);
        Task UpdateUser(int id,User dto);
        Task DeleteUser(int id);
    }
}
