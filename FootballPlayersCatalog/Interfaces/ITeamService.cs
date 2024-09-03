using FootballPlayersCatalog.Models;

namespace FootballPlayersCatalog.Interfaces;

public interface ITeamService
{
    public GetTeamDto? GetByIdDto(long id);
    public GetTeamDto? GetByNameDto(string name);
    public List<GetTeamDto> GetAllDto();
    public void AddDto(AddTeamDto teamDto);
    public void UpdateDto(UpdateTeamDto teamDto);
    public void Delete(long id);

   
    /*
    public Team? GetById(long id);
    public Team? GetByName(string name);
    public List<Team> GetAll();
    public void Add(Team team);
    public void Update(Team team);
    public void Delete(long id);
     */
}