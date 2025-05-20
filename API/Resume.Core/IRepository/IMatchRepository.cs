using System.Text.RegularExpressions;

namespace Resume.Core.IRepository
{
    public interface IMatchRepository
    {
        Match GetMatchById(int id);
        List<IEnumerable<Match>> GetAllMatches();
        Match AddMatch(Match entity);
        Match UpdateMatch(Match entity);
        Match DeleteMatch(int id);
    }
}