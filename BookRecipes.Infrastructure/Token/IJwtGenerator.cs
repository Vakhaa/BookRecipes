using System.Threading.Tasks;
using BookRecipes.Infrastructure.Identity;

namespace BookRecipes.Infrastructure.Token
{
    public interface IJwtGenerator
    {
        Task<TokensRequest> CreateTokenAndRefreshTokenAsync(AppUser user);
    }
}
