using System.Collections.Generic;
using System.Threading.Tasks;

using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.WebApi.Extensions.Attributes;
using BookRecipes.WebApi.WebHub;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AuthorizationFilter]
    public class MessagesController : ControllerBase
    {
        IHubContext<ChatHub> _hubContext;
        private readonly MessageController _messageController;
        
        private readonly ILogger<BookController> _logger;


        public MessagesController(MessageController messageController,
            IHubContext<ChatHub> hubContext,
            ILogger<BookController> logger)
        {
            _messageController= messageController;
            _hubContext = hubContext;
            _logger = logger;
        }

        [HttpGet("")]
        [Produces("application/json")]
        [TokenAuthorizationFilter]
        public async Task<ActionResult<object>> GetFriendMessageAsync(int currentUserId, int friendId)
        {
            var isAuthorizated = (bool)HttpContext.Items["isAuthorizated"];
            if (isAuthorizated)
            {
                var response = await _messageController.GetFriendMessageAsync(currentUserId, friendId);
                List<object> messages = new List<object>();

                if (response != null)
                {
                    foreach (var item in response)
                    {
                        messages.Add(new
                        {
                            id = item.Id,
                            authorId = item.AuthorId,
                            recipientId = item.RecipientId,
                            message = item.Message,
                            isChanged = item.IsChanged,
                            date = item.Date,
                            time = item.Time,
                            isMe = (item.AuthorId == currentUserId)
                        });
                    }
                }

                return Ok(messages);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost("CreateMessage/{conectionId}")] /*int authorId, int recipientId, string message*/
        [TokenAuthorizationFilter]
        public async Task<ActionResult<Messages>> AddMessageToFriendAsync(Messages messages, string conectionId)
        {
            var isAuthorizated = (bool)HttpContext.Items["isAuthorizated"];
            if (isAuthorizated)
            {
                /*string conectionId = "";
            if (Request.Cookies.ContainsKey("conectionId"))
                conectionId = Request.Cookies["conectionId"];*/
                var response = await _messageController.AddMessageAsync(messages.AuthorId, messages.RecipientId, messages.Message);
                _hubContext.Clients.Client(conectionId).SendAsync("sendNewMessage", response.RecipientId, response.AuthorId);
                if (response != null)
                    return Ok(response);
                return BadRequest();
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}

