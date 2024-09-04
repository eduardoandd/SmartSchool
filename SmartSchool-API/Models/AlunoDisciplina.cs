using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_API.Models
{
    public class AlunoDisciplina
    {
        public AlunoDisciplina(){}
        public AlunoDisciplina(Aluno aluno, int alunoId) 
        {
            this.Aluno = aluno;
            this.AlunoId = alunoId;
        }

        public Aluno Aluno { get; set; }
        public Disciplina Disciplina { get; set; }
        public int AlunoId { get; set; }
        public int DisciplinaId { get; set; }

    }
}