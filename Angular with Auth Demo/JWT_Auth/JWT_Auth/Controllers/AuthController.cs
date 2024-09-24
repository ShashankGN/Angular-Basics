using JWT_Auth.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JWT_Auth.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }
            if (user.UserName == "Harry" && user.Password == "Harry@123")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345kjhakjdhasdkjsahdasdxssadasd"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role,"Admin")

                };

                var tokenOptions = new JwtSecurityToken(
                    issuer: "true",
                    audience: "true",
                    //claims: new List<Claim>(),
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signingCredentials

                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new {Token=tokenString});
            }
            return Unauthorized();
        }
    }
}
