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
    public class PostsController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly PostController _postController;


        public PostsController(PostController postController, ILogger<BookController> logger)
        {
            _postController= postController;
            _logger = logger;
        }

        [HttpGet("{currentUserId}")]
        [Produces("application/json")]
        public async Task<ActionResult<List<Posts>>> GetUserPostsAsync(int currentUserId)
        {
            return new ObjectResult(await _postController.GetUserPostsAsync(currentUserId));
        }

        [HttpPost("CreatePost")] /*int profileId, string title, string body, int? authorId = null*/
        public async Task<ActionResult<Posts>> AddPostAsync(Posts post)
        {
            var response = await _postController.AddPostsAsync(post.ProfileId, post.Title, post.Body, post.AuthorId);
            if (response != null) 
            return Ok(response);
            return BadRequest();
        }
    }
}
