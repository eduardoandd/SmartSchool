using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_API.Data;

namespace SmartSchool_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AlunoController: ControllerBase
    {
        private readonly IRepository _repo;

        public AlunoController(IRepository repo)
        {
             _repo=repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){

            try
            {
               var result = await _repo.GetAllAlunosAsync(false);
               return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }

            
        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetAlunoById(int AlunoId){

            try
            {
               var result = await _repo.GetAlunoAsyncById(AlunoId,true);
               return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }

            
        }
    }
}