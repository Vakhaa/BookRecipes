using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BookRecipes.WebApi.Extensions.Attributes
{
    [AttributeUsage(AttributeTargets.All, Inherited = true, AllowMultiple = false)]
    public class MyAllowAnonymousFilterAttribute : Attribute, IAsyncActionFilter
    {
        public Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            switch(context.HttpContext.Response.StatusCode)
            {
                case 401:
                    context.HttpContext.Response.StatusCode = 200;
                    break;
            }
            return next.Invoke();
        }
    }
}
