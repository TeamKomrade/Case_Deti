using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Case_Deti.Models;
using Case_Deti.Data;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace Case_Deti.Controllers
{
    public class UserController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DetiContext _db;
        public UserController(ILogger<HomeController> logger, DetiContext context)
        {
            _logger = logger;
            _db = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                var login = User.Claims.ToList()[0].Value;
                var current_user = _db.Users
                    .Where(u => u.Login == login)
                    .Include(u => u.UserAchievements)
                    .ThenInclude(ua => ua.Achievement).FirstOrDefault();
                if (current_user == null) return RedirectToAction("Login");
                var hasFName = current_user.FirstName != null;
                var hasLName = current_user.LastName != null;
                var achievements = new List<Achievement>();
                foreach (var ua in current_user.UserAchievements) achievements.Add(ua.Achievement);
                var user = new UserModel()
                {
                    FirstName = (hasFName) ? current_user.FirstName : "Александр",
                    LastName = (hasLName) ? current_user.LastName : "Петров",
                    Achievements = achievements.ToList()
                };
                return View();
            }
            else
            {
                var achievements = new List<Achievement>()
                {
                    new Achievement()
                    {
                        AchievementID = 0,
                        Title = "Основы C#",
                        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/218px-C_Sharp_logo.svg.png"
                    }
                };
                var user = new UserModel()
                {
                    FirstName = "Александр",
                    LastName = "Петров",
                    MiddleName = "Игоревич",
                    Achievements = achievements,
                };
                return View(user);
            }
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            if (User.Identity.IsAuthenticated) return RedirectToAction("Index");
            return View();
        }

        [HttpGet]
        public IActionResult CoursesList()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Progress()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Rating()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                var password = Util.GetEncryptedBytes(model.Password);
                if (await _db.Users.FirstOrDefaultAsync(u => u.Login == model.Login) == null)
                {
                    User user = new User()
                    {
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        MiddleName = model.MiddleName,
                        Login = model.Login,
                        Password = password
                    };
                    _db.Users.Add(user);
                    await _db.SaveChangesAsync();
                    return RedirectToAction("Login", "User");
                }
                else ModelState.AddModelError("", "Такой пользователь уже есть в базе данных");
            }
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> Login(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                var password = Util.GetEncryptedBytes(model.Password);
                var user = await _db.Users.FirstOrDefaultAsync(u => u.Login == model.Login && u.Password == password);
                if (user != null)
                {
                    await Authenticate(user);
                    return RedirectToAction("Index", "Home");
                }
                ModelState.AddModelError("", "Проверьте правильность введенных данных");
            }
            return View(model);
        }

        
        private async Task Authenticate(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login)
            };
            var id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
    }

    
}
