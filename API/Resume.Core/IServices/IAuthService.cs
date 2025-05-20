using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core.IServices
{
    public interface IAuthService
    {
        Task<(string token, User user)> LoginAsync(Login login);
        Task<(string token, User user)> RegisterUserAsync(User user);
       
    }
}
