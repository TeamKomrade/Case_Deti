using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Case_Deti.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Deti.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private readonly ILogger<ApiController> _logger;
        private readonly DetiContext _db;
        public ApiController(ILogger<ApiController> logger, DetiContext context)
        {
            _logger = logger;
            _db = context;
        }

        // GET: api/<ApiController>
        [HttpGet]
        public async Task<IEnumerable<Profession>> GetProfessions()
        {
            return _db.Professions.ToArray();
        }

        // GET api/<ApiController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ApiController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ApiController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ApiController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
