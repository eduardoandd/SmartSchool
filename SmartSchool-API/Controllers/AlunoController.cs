using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_API.Data;
using SmartSchool_API.Models;

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

        [HttpGet("ByDisciplina/{DisciplinaId}")]

        public async Task<IActionResult> GetDisciplinaById(int disciplinaId){
            try
            {
                var result= await _repo.GetAlunosAsyncByDisciplinaId(disciplinaId,false);
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Aluno model){
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
                
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{alunoId}")]
        public async Task<IActionResult> Put(int alunoId,Aluno model){
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId,false);
                if(aluno == null) return NotFound("Aluno não encontrado!");

                _repo.Update(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
                
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{alunoId}")]
        public async Task<IActionResult> delete(int alunoId)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound("Aluno não encontrado!");

                _repo.Delete(aluno);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok("Deletado");
                }                
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }
    }
}