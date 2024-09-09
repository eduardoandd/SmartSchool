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
    public class ProfessorController: ControllerBase
    {
        private readonly IRepository _repo;

        public ProfessorController(IRepository repo){
            _repo=repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){
            try
            {
                var result= await _repo.GetAllProfessoresAsync(true);
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                
                return BadRequest($"Erro {ex.Message}");
            }
        }

        [HttpGet("{professorId}")]
        public async Task<IActionResult> GetProfessorById(int professorId){
            try
            {
                var result= await _repo.GetProfessorAsyncById(professorId,true);
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }
        }

        [HttpGet("ByAlunoId/{professorId}")]
        public async Task<IActionResult> GetProfessorByAlunoId(int professorId){
            try
            {
                var result= await _repo.GetProfessoresAsyncByAlunoId(professorId,true);
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Professor model){
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync()){
                    return Ok(model);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }
            return BadRequest();
        }

        [HttpPut("{professorId}")]
        public async Task<IActionResult> Put(int professorId,Professor model){
            try
            {
                var professor = await _repo.GetProfessorAsyncById(professorId,false);
                if (professor == null) return NotFound("Professor não encontrado");

                _repo.Update(model);

                if(await _repo.SaveChangesAsync()){
                    return Ok(model);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }
            return BadRequest();
        }

        [HttpDelete("{professorId}")]
        public async Task<IActionResult> Delete(int professorId){
            try
            {
                var professor = await _repo.GetProfessorAsyncById(professorId,false);
                if (professor == null) return NotFound("Professor não encontrado");

                _repo.Delete(professor);

                if(await _repo.SaveChangesAsync()){
                    return Ok($"{professor.Nome} deletado com sucesso!");
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Erro {ex.Message}");
            }
            return BadRequest();
        }



    }
}