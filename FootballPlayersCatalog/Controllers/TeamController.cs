using FootballPlayersCatalog.Interfaces;
using FootballPlayersCatalog.Models;
using FootballPlayersCatalog.Services;
using Microsoft.AspNetCore.Mvc;

namespace FootballPlayersCatalog.Controllers;

[Route("[controller]/[action]")]
public class TeamController : Controller
{
   private readonly ITeamService _service;

   public TeamController(ITeamService service)
   {
      _service = service;
   }

   [HttpGet]
   public IActionResult GetById(long id)
   {
      var team = _service.GetByIdDto(id);
      return Ok(team);
   }

   [HttpGet]
   public IActionResult GetByName(string name)
   {
      var team = _service.GetByNameDto(name);
      return Ok(team);
   }

   [HttpGet]
   public IActionResult GetAll()
   {
      var teams = _service.GetAllDto();
      return Ok(teams);
   }

   [HttpPost]
   public IActionResult Add([FromBody] AddTeamDto teamDto)
   {
      _service.AddDto(teamDto);
      return Ok();
   }

   [HttpPost]
   public IActionResult Update([FromBody] UpdateTeamDto teamDto)
   {
      _service.UpdateDto(teamDto);
      return Ok();
   }

   [HttpDelete]
   public IActionResult Delete(long id)
   {
      _service.Delete(id);
      return Ok();
   }
}