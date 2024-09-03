namespace FootballPlayersCatalog.Models;

public class Team
{
    public long Id { get; set; }
    public string Name { get; set; } = "";
    public List<FootballPlayer> FootballPlayers { get; set; } = new ();
}