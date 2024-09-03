using FootballPlayersCatalog.Models;
using Microsoft.AspNetCore.Mvc;

namespace FootballPlayersCatalog.Controllers;

[Route("[controller]/[action]")]
public class DictionaryController : Controller
{
    [HttpGet]
    public IActionResult GetAllCountries()
    {
        return Ok(Enum.GetNames<Country>());
    }

    [HttpGet]
    public IActionResult GetAllGenders()
    {
        return Ok(Enum.GetNames<Gender>());
    }
}