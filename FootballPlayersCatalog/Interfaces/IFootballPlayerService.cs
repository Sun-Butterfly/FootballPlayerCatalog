using FootballPlayersCatalog.Models;

namespace FootballPlayersCatalog.Interfaces;

public interface IFootballPlayerService
{
    public GetFootballPlayerDto? GetByIdDto(long id);
    public GetFootballPlayerDto? GetByNameDto(string name, string lastName);
    public List<GetFootballPlayerDto> GetAllDto();
    public void AddDto(AddFootballPlayerDto footballPlayerDto);
    public void UpdateDto(UpdateFootballPlayerDto footballPlayerDto);
    public void Delete(long id);
    
    
    // public FootballPlayer? GetById(long id);
    // public FootballPlayer? GetByName(string name, string lastName);
    // public List<FootballPlayer> GetAll();
    // public void Add(FootballPlayer footballPlayer);
    // public void Update(FootballPlayer footballPlayer);
    // public void Delete(long id);
}