using FootballPlayersCatalog.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballPlayersCatalog;

public class DataBaseContext : DbContext
{
    public DbSet<FootballPlayer> FootballPlayers { get; set; } = null!;
    public DbSet<Team> Teams { get; set; } = null!;

    public DataBaseContext()
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);;
    }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .SetBasePath(Directory.GetCurrentDirectory())
            .Build();
        optionsBuilder.UseNpgsql(config.GetConnectionString("DefaultConnection"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FootballPlayer>()
            .HasOne(f => f.Team)
            .WithMany(t => t.FootballPlayers)
            .HasForeignKey(x => x.TeamId);
    }
}