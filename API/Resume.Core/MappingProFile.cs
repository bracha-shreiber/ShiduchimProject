using AutoMapper;
using Resume.Core.DTOs;
using Resume.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resume.Core
{
    public class MappingProFile:Profile
    {
        public MappingProFile()
        {
            CreateMap<User,UserDTO>().ReverseMap();
        }
    }
}
