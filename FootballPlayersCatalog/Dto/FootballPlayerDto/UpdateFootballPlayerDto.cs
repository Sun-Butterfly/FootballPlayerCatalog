namespace FootballPlayersCatalog.Models;

public class UpdateFootballPlayerDto
{
    public long Id { get; set; }
    public string Name { get; set; } = "";
    public string LastName { get; set; } = "";
    public Gender Gender { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string TeamName { get; set; }
    public Country Country { get; set; }
}