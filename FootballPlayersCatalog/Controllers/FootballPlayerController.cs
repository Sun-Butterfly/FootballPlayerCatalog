using FootballPlayersCatalog.Interfaces;
using FootballPlayersCatalog.Models;
using FootballPlayersCatalog.Services;
using Microsoft.AspNetCore.Mvc;

namespace FootballPlayersCatalog.Controllers;

[Route("[controller]/[action]")]
public class FootballPlayerController : Controller
{
    private readonly IFootballPlayerService _service;

    public FootballPlayerController(IFootballPlayerService service)
    {
        _service = service;
    }
    
    [HttpGet]
    public IActionResult GetById(long id)
    {
        var footballPlayer = _service.GetByIdDto(id);
        return Ok(footballPlayer);
    }

    [HttpGet]
    public IActionResult GetByName(string name, string lastName)
    {
        var footballPlayer = _service.GetByNameDto(name, lastName);
        return Ok(footballPlayer);
    }
    
    [HttpGet]
    public IActionResult GetAll()
    {
        var footballPlayers = _service.GetAllDto();
        return Ok(footballPlayers);
    }

    [HttpPost]
    public IActionResult Add([FromBody] AddFootballPlayerDto footballPlayerDto)
    {
        _service.AddDto(footballPlayerDto);
        return Ok();
    }

    [HttpPost]
    public IActionResult Update([FromBody] UpdateFootballPlayerDto footballPlayerDto)
    {
        _service.UpdateDto(footballPlayerDto);
        return Ok();
    }

    [HttpDelete]
    public IActionResult Delete(long id)
    {
        _service.Delete(id);
        return Ok();
    }
}