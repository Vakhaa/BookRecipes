using BookRecipes.Infrastructure.Identity;

namespace BookRecipes.Infrastructure.Token
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }
}
