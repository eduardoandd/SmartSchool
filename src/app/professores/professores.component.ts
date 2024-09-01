import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo='Professores'
  public professorSelecionado:string=''

  professores= [
    {id:1,nome:'Marcos',disciplina:'Matemática'},
    {id:2,nome:'Antonio',disciplina:'Fisíca'},
    {id:3,nome:'Bianca',disciplina:'Geografia'},
    {id:4,nome:'Paulo',disciplina:'Filosofia'},
  ]



  constructor() { }

  ngOnInit(): void {
  }

  professorSelect(professor:any){
    this.professorSelecionado=professor.nome
  }
  Voltar(){
    this.professorSelecionado=''
  }

}
