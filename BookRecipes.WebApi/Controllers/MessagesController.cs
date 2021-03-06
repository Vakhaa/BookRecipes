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
        [HttpPost("CreateMessage")] /*int authorId, int recipientId, string message*/
        public async Task<ActionResult<Messages>> AddMessageToFriendAsync(Messages messages)
        {
            var response = await _messageController.AddMessageAsync(messages.AuthorId, messages.RecipientId, messages.Message);
            if (response != null)
                return Ok(response);
            return BadRequest();
        }
    }
}

