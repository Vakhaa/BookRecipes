using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.SharedKernel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly MessageController _messageController;


        public MessagesController(MessageController messageController, ILogger<BookController> logger)
        {
            _messageController= messageController;
            _logger = logger;
        }

        [HttpGet("")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Messages>>> GetFriendMessageAsync(int currentUserId, int friendId)
        {
            return new ObjectResult(await _messageController.GetFriendMessageAsync(currentUserId, friendId));
        }
    }
}
