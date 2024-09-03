using FootballPlayersCatalog.Interfaces;
using FootballPlayersCatalog.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballPlayersCatalog.Services;

public class FootballPlayerService : IFootballPlayerService
{
    private DataBaseContext _db;

    public FootballPlayerService(DataBaseContext db)
    {
        _db = db;
    }

    public GetFootballPlayerDto? GetByIdDto(long id)
    {
        var footballPlayer = _db.FootballPlayers.Select(x =>
            new GetFootballPlayerDto()
            {
                Id = x.Id,
                Name = x.Name,
                LastName = x.LastName,
                Country = x.Country,
                DateOfBirth = x.DateOfBirth.Date,
                Gender = x.Gender,
                TeamName = x.Team.Name
            }).FirstOrDefault(x => x.Id == id);
        return footballPlayer;
    }

    public GetFootballPlayerDto? GetByNameDto(string name, string lastName)
    {
        var footballPlayer = _db.FootballPlayers.Select(x =>
            new GetFootballPlayerDto()
            {
                Id = x.Id,
                Name = x.Name,
                LastName = x.LastName,
                Country = x.Country,
                DateOfBirth = x.DateOfBirth.Date,
                Gender = x.Gender,
                TeamName = x.Team.Name
            }).FirstOrDefault(x =>
            x.Name == name && x.LastName == lastName);
        return footballPlayer;
    }

    public List<GetFootballPlayerDto> GetAllDto()
    {
        return _db.FootballPlayers.Select(x =>
            new GetFootballPlayerDto()
            {
                Id = x.Id,
                Name = x.Name,
                LastName = x.LastName,
                Country = x.Country,
                DateOfBirth = x.DateOfBirth.Date,
                Gender = x.Gender,
                TeamName = x.Team.Name
            }).ToList();
    }

    public void AddDto(AddFootballPlayerDto footballPlayerDto)
    {
        var team = _db.Teams.FirstOrDefault(x => x.Name == footballPlayerDto.TeamName);
        if (team == null)
        {
            team = new Team()
            {
                Name = footballPlayerDto.TeamName
            };

            _db.Teams.Add(team);
        }

        var footballPlayer = new FootballPlayer()
        {
            Name = footballPlayerDto.Name,
            LastName = footballPlayerDto.LastName,
            Country = footballPlayerDto.Country,
            DateOfBirth = footballPlayerDto.DateOfBirth.Date,
            Gender = footballPlayerDto.Gender,
            Team = team
        };
        _db.FootballPlayers.Add(footballPlayer);
        _db.SaveChanges();
    }

    public void UpdateDto(UpdateFootballPlayerDto footballPlayerDto)
    {
        var team = _db.Teams.FirstOrDefault(x => x.Name == footballPlayerDto.TeamName);
        if (team == null)
        {
            team = new Team()
            {
                Name = footballPlayerDto.TeamName
            };

            _db.Teams.Add(team);
        }
        var footballPlayer = _db.FootballPlayers.FirstOrDefault(x => x.Id == footballPlayerDto.Id);
        footballPlayer.Name = footballPlayerDto.Name;
        footballPlayer.LastName = footballPlayerDto.LastName;
        footballPlayer.Gender = footballPlayerDto.Gender;
        footballPlayer.DateOfBirth = footballPlayerDto.DateOfBirth;
        footballPlayer.Country = footballPlayerDto.Country;
        footballPlayer.Team = team;
        _db.FootballPlayers.Update(footballPlayer);
        _db.SaveChanges();
    }

    public void Delete(long id)
    {
        if (ExistsById(id))
        {
            _db.FootballPlayers
                .Where(x => x.Id == id)
                .ExecuteDelete();
        }
    }

    private bool ExistsById(long id)
    {
        var footballPlayer = _db.FootballPlayers
            .FirstOrDefault(x => x.Id == id);
        if (footballPlayer == null)
        {
            return false;
        }

        return true;
    }
    /*
     public FootballPlayer? GetById(long id)
    {
        var footballPlayer = _db.FootballPlayers.FirstOrDefault(footballPlayerDto => footballPlayerDto.Id == id);
        return footballPlayer;
    }

    public FootballPlayer? GetByName(string name, string lastName)
    {
        var footballPlayer = _db.FootballPlayers.FirstOrDefault(footballPlayerDto =>
            footballPlayerDto.Name == name && footballPlayerDto.LastName == lastName);
        return footballPlayer;
    }

     public List<FootballPlayer> GetAll()
    {
        return _db.FootballPlayers.ToList();
    }

    public void Add(FootballPlayer footballPlayer)
    {
        _db.FootballPlayers.Add(footballPlayer);
        _db.SaveChanges();
    }

    public void Update(FootballPlayer footballPlayer)
    {
        _db.FootballPlayers.Update(footballPlayer);
        _db.SaveChanges();
    }

    public void Delete(long id)
    {
        if (ExistsById(id))
        {
            var footballPlayer = _db.FootballPlayers.FirstOrDefault(footballPlayerDto => footballPlayerDto.Id == id);
            _db.Remove(footballPlayer);
            _db.SaveChanges();
        }
    }
    */
}