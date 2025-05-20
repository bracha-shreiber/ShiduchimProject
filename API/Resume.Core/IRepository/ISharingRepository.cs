using Resume.Core.Models;

namespace Resume.Core.IRepository
{
    public interface ISharingRepository
    {
        Sharing GetSharingById(int id);
        List<IEnumerable<Sharing>> GetAllSharing();
        Sharing AddSharing(Sharing entity);
        Sharing UpdateSharing(Sharing entity);
        Sharing DeleteSharing(int id);
    }
}