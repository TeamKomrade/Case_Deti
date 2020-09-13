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

                var profession1 = new Data.Profession()
                {
                    Name = "Специалист по VR и AR",
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
                _db.ProfessionCategories.Add(new ProfessionCategory() { Category = category, Profession = profession1 });

                var course = new Data.Course()
                {
                    Name = "Изучение основ Java",
                    Address = "ул. Пушкина д. 10а",
                    ApproxTime = "15",
                    DifficultyLevel = "2",
                    ImgURL = "http://www.juntech.ru/sites/default/files/inline-images/java.png",
                    Info = "На занятиях этого направления Вы: "+
                    "- познакомитесь с синтаксисом языка; "+
                    "- рассмотрите элементы объектно-ориентированного программирования; " +
                    "- поработаете с данными и алгоритмами; " +
                    "- изучите графику и интерфейсы;" +
                    "-освоите один из самых популярных языков. " +
                    "Рекомендовано для 12 - 18 лет.",
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

                var course1 = new Data.Course()
                {
                    Name = "Разработка VR и AR приложений",
                    Address = "ул. Пушкина д. 10а",
                    ApproxTime = "21",
                    DifficultyLevel = "5",
                    ImgURL = "http://www.juntech.ru/sites/default/files/inline-images/%D0%B2%D0%B8%D0%B0%D1%80.png",
                    Info = "На занятиях этого направления Вы: " +
                    "- научитесь разбираться в технологиях и адаптировать их под свои проекты; " +
                    "- будете применять самостоятельные разработки приложений виртуальной (VR), дополненной (AR) и смешанной (MR) реальности для различных устройств; " +
                    "- разберете приемы программирования в контексте игрового движка Unity. " +
                    "- освоите ААА-пайплайн в 3D- моделировании (разработка lowpoly-модели с разверткой и простой текстурой). " +
                    "Рекомендовано для 12 - 18 лет.",
                    ScheduleList = new List<Schedule>()
                    {
                        new Schedule()
                        {
                            Marker = "ПН-ПТ",
                            Time = "13:20"
                        },
                        new Schedule()
                        {
                            Marker = "СБ",
                            Time = "10:00"
                        }
                    },
                };

                var skill = new Skill()
                {
                    Name = "Программирование"
                };
                _db.ProfessionCourses.Add(new ProfessionCourse() { Profession = profession, Course = course });
                _db.ProfessionCourses.Add(new ProfessionCourse() { Profession = profession, Course = course1 });
                _db.CourseSkills.Add(new CourseSkills() { Course = course, Skill = skill });
                _db.CourseSkills.Add(new CourseSkills() { Course = course1, Skill = skill });
                _db.Users.Add(admin);
                await _db.SaveChangesAsync();
            };
        }
    }
}
