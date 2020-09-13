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

        public async Task<IActionResult> Index()
        {
            await FillDB(_db);
            return View();
        }

        public IActionResult Courses()
        {
            return View();
        }

        public IActionResult Profession()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private async Task FillDB(DetiContext db)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Login == "hackadmin" && u.Password == Util.GetEncryptedBytes("hackadmin"));
            if (user == null)
            {
                var admin = new Data.User() 
                { 
                    Login = "hackadmin", 
                    Password = Util.GetEncryptedBytes("hackadmin"), 
                    FirstName = "--", LastName = "---", 
                    MiddleName = "---", Role = 
                    Role.Admin 
                };

                var profession = new Data.Profession()
                {
                    Name = "Программист",
                    ImgURL = @"https://sun9-29.userapi.com/1-WgAmlkOwd-1_sW7Wp_uUlWFEjHdkAsZLxiLg/JCI0QEBnKX8.jpg",
                    ProfessionID = 0
                };

                var category = new Data.Category()
                {
                    ImgURL = @"https://sun9-29.userapi.com/1-WgAmlkOwd-1_sW7Wp_uUlWFEjHdkAsZLxiLg/JCI0QEBnKX8.jpg",
                    Name = "Информационные технологии",
                    CategoryID = 0
                };

                _db.ProfessionCategories.Add(new ProfessionCategory() { Category = category, Profession = profession });

                var course = new Data.Course()
                {
                    Name = "Изучение основ Java",
                    Address = "ул. Пушкина д. 10а",
                    ApproxTime = "15",
                    DifficultyLevel = "2",
                    ImgURL = "http://www.juntech.ru/sites/default/files/inline-images/java.png",
                    Info = "На занятиях этого направления Вы:\n"+
                    "- познакомитесь с синтаксисом языка;\n"+
                    "- рассмотрите элементы объектно-ориентированного программирования;\n" +
                    "- поработаете с данными и алгоритмами;\n" +
                    "- изучите графику и интерфейсы;\n" +
                    "-освоите один из самых популярных языков.\n\n" +
                    "Рекомендовано для 12 - 18 лет.\n",
                    ScheduleList = new List<Schedule>()
                    { 
                        new Schedule() 
                        {
                            Marker = "ПН-ПТ",
                            Time = "15:30"
                        },
                        new Schedule()
                        {
                            Marker = "СБ",
                            Time = "12:10"
                        }
                    },
                };

                var skill = new Skill()
                {
                    Name = "Программирование"
                };
                _db.ProfessionCourses.Add(new ProfessionCourse() { Profession = profession, Course = course });
                _db.CourseSkills.Add(new CourseSkills() { Course = course, Skill = skill });
                _db.Users.Add(admin);
                await _db.SaveChangesAsync();
            };
        }
    }
}
