namespace FootballPlayersCatalog.Models;

public class FootballPlayer
{
    public long Id { get; set; }
    public string Name { get; set; } = "";
    public string LastName { get; set; } = "";
    public Gender Gender { get; set; }
    public DateTime DateOfBirth { get; set; }
    public long TeamId { get; set; }
    public Team Team { get; set; }
    public Country Country { get; set; }
}