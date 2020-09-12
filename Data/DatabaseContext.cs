using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Case_Deti.Data
{
    public class DetiContext : DbContext
    {
        public DetiContext(DbContextOptions<DetiContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
    }

    public class User
    {
        public int UserID { get; set; }
        public string Login { get; set; }
        public byte[] Password { get; set; }    
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public Role Role { get; set; }
    }

    public enum Role
    {
        Admin,
        User
    }
}
