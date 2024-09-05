using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SmartSchool_API.Models;

namespace SmartSchool_API.Data
{
    public interface IRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //ALUNO
        Task<Aluno[]> GetAllAlunosAsync(bool includeProfessor);        
        Task<Aluno[]> GetAlunosAsyncByDisciplinaId(int disciplinaId, bool includeDisciplina);
        Task<Aluno> GetAlunoAsyncById(int alunoId, bool includeProfessor);
        
        //PROFESSOR
        Task<Professor[]> GetAllProfessoresAsync(bool includeAluno);
        Task<Professor> GetProfessorAsyncById(int professorId, bool includeAluno);
        Task<Professor[]> GetProfessoresAsyncByAlunoId(int alunoId, bool includeDisciplina);
    }
}