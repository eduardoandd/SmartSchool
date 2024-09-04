using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AlunoController: ControllerBase
    {
        [HttpGet]
        public IActionResult Get(){

            try
            {
               return Ok("");
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }

            
        }
    }
}