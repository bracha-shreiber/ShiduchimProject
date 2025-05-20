using Resume.Core.Models;

namespace Resume.Core.IRepository
{
    public interface IUserRepository
    {
        Task<User> GetUserById(int id);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> AddUser(User entity);
        Task UpdateUser(int id,User entity);
        Task DeleteUser(int id);
    }
}