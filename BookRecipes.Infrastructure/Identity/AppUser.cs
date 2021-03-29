using Microsoft.AspNetCore.Identity;

namespace BookRecipes.Infrastructure.Identity
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
    }
}
