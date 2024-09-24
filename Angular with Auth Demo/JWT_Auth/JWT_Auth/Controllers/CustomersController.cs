using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JWT_Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public IEnumerable<string> Get()
            => new string[] { "Harry", "Potter" };

        //[HttpGet]
        //[Authorize(Roles ="Admin")]
        //public IEnumerable<string> GetAdmin()
        //    => new string[] { "HarryAdmin", "PotterAdmin" };
    }
}
