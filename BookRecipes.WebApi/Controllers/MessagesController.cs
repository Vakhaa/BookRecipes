using System.Threading.Tasks;
using BookRecipes.Core.Controllers;
using BookRecipes.Core.Entities.SocialNetwork;
using BookRecipes.WebApi.WebHub;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BookRecipes.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        IHubContext<ChatHub> _hubContext;
        private readonly ILogger<BookController> _logger;
        private readonly MessageController _messageController;


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
        public async Task<ActionResult<object>> GetFriendMessageAsync(int currentUserId, int friendId)
        {
            var response = await _messageController.GetFriendMessageAsync(currentUserId, friendId);
            string messages = "[";

            if (response != null)
            {
                foreach (var item in response)
                {
                    var message = "{'id': " + item.Id + "," +
                        "'authorId': " + item.AuthorId + "," +
                        "'recipientId':" + item.RecipientId + "," +
                        "'message':'" + item.Message + "'," +
                        $"'isChanged':{item.IsChanged.ToString().ToLower()}," +
                        "'date': '" + item.Date + "'," +
                        "'time':'" + item.Time + "'," +
                        $"'isMe':{(item.AuthorId == currentUserId).ToString().ToLower()}" +
                        "},";
                    messages+= message;
                }
            }
            messages += "]";
            return JsonConvert.DeserializeObject(messages);
            //return new ObjectResult(messages);
        }

        [HttpPost("CreateMessage/{conectionId}")] /*int authorId, int recipientId, string message*/
        public async Task<ActionResult<Messages>> AddMessageToFriendAsync(Messages messages, string conectionId)
        {
            /*string conectionId = "";
            if (Request.Cookies.ContainsKey("conectionId"))
                conectionId = Request.Cookies["conectionId"];*/
            var response = await _messageController.AddMessageAsync(messages.AuthorId, messages.RecipientId, messages.Message);
            _hubContext.Clients.Client(conectionId).SendAsync("sendNewMessage",response.RecipientId, response.AuthorId);
            if (response != null)
                return Ok(response);
            return BadRequest();
        }
    }
}

