using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_API.Models
{
    public class Disciplina
    {
        public Disciplina(){}
        public Disciplina(int id, int professorId,string nome) 
        {
            this.Id = id;
            this.Nome=nome;
            this.ProfessorId = professorId;
        }


        public int Id { get; set; }
        public string Nome { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
    }
}