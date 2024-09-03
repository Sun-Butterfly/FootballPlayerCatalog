using FootballPlayersCatalog.Interfaces;
using FootballPlayersCatalog.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballPlayersCatalog.Services;

public class TeamService : ITeamService
{
    private DataBaseContext _db;

    public TeamService(DataBaseContext db)
    {
        _db = db;
    }
    
    public GetTeamDto? GetByIdDto(long id)
    {
        var team = _db.Teams.Select(x=>new GetTeamDto()
        {
           Id = x.Id,
           Name = x.Name
        }).FirstOrDefault(x => x.Id==id);
        return team;
    }

    public GetTeamDto? GetByNameDto(string name)
    {
        var team = _db.Teams.Select(x=>new GetTeamDto()
        {
            Id = x.Id,
            Name = x.Name
        }).FirstOrDefault(x => x.Name==name);
        return team;
    }

    public List<GetTeamDto> GetAllDto()
    {
        return _db.Teams.Select(x=>
            new GetTeamDto()
            {
                Id = x.Id,
                Name = x.Name
            }).ToList();
    }

    public void AddDto(AddTeamDto teamDto)
    {
        var team = new Team()
        {
            Name = teamDto.Name
        };
        _db.Teams.Add(team);
        _db.SaveChanges();
    }

    public void UpdateDto(UpdateTeamDto teamDto)
    {
        var team = _db.Teams.FirstOrDefault(x => x.Id == teamDto.Id);
        team.Name = teamDto.Name;
        _db.Teams.Update(team);
        _db.SaveChanges();
    }

    public void Delete(long id)
    {
        if (ExistsById(id))
        {
            _db.Teams
            .Where(x => x.Id == id)
            .ExecuteDelete();
            
        }
    }
    private bool ExistsById(long id)
    {
        var team = _db.Teams
            .FirstOrDefault(x => x.Id == id);
        if (team == null)
        {
            return false;
        }

        return true;
    }
    
    /*
     public Team? GetById(long id)
    {
        var team = _db.Teams.FirstOrDefault(x => x.Id==id);
        return team;
    }

    public Team? GetByName(string name)
    {
        var team = _db.Teams.FirstOrDefault(x => x.Name == name);
        return team;
    }

    public List<Team> GetAll()
    {
        return _db.Teams.ToList();
    }

    public void Add(Team team)
    {
        _db.Teams.Add(team);
        _db.SaveChanges();
    }

    public void Update(Team team)
    {
        _db.Teams.Update(team);
        _db.SaveChanges();
    }

    public void Delete(long id)
    {
        if (ExistsById(id))
        {
            var team = _db.Teams.FirstOrDefault(x => x.Id == id);
            _db.Remove(team);
            _db.SaveChanges();
        }
    }
     */
}