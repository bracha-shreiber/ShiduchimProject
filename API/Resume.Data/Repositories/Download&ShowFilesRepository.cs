using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Data.Repositories
{
    public class Download_ShowFilesRepository
    {
        private readonly ResumeContext _context;
        public Download_ShowFilesRepository(ResumeContext context)
        {
            _context = context;
        }
        public async Task GetAllUserFiles()
        {

        }
    }
}
