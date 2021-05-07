using System.Collections.Generic;
using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.WebApi.Extensions.Attributes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [MyAllowAnonymousFilter]
    public class FriendsController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly FriendController _friendController;


        public FriendsController(FriendController friendController,ILogger<BookController> logger)
        {
            _friendController = friendController;
            _logger = logger;
        }

        [HttpGet("{currentUserId}")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Friends>>> GetCurrentUserFriendsAsync(int currentUserId)
        {
            var response = await _friendController.GetFriendsAsync(currentUserId);
            var Friends = new List<Profile>(); 
            foreach (var item in response)
            {
                Friends.Add(item.Friend);
            }
            return new ObjectResult(Friends);
        }
        
        [HttpGet("Friend")]
        [Produces("application/json")] // Chto eto tut delajet :)
        public async Task<ActionResult<Friends>> GetMyRecipeByIdAsync(int currentUserId,int recipeId)
        {
            return new ObjectResult(await _friendController.GetFriendByIdAsync(currentUserId, recipeId));
        }
    }
}
