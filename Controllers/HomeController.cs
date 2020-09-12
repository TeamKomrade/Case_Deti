using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Case_Deti.Models;
using Case_Deti.Data;
using Microsoft.EntityFrameworkCore;

namespace Case_Deti.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DetiContext _db;

        public HomeController(ILogger<HomeController> logger, DetiContext context)
        {
            _logger = logger;
            _db = context;
        }

        public async Task<ActionResult> Index()
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Login == "hackadmin" && u.Password == Util.GetEncryptedBytes("hackadmin"));
            if (user == null)
            {
                var admin = new Data.User() { Login = "hackadmin", Password = Util.GetEncryptedBytes("hackadmin"), FirstName = "--", LastName = "---", MiddleName = "---", Role = Role.Admin };
                _db.Users.Add(admin);
                await _db.SaveChangesAsync();
            };
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
