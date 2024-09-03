import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo='Alunos'
  public alunos=[
    {id:1,nome:'Eduardo', sobrenome:'Andrade',telefone:'34533225'},
    {id:2,nome:'Pedro', sobrenome:'Antonio',telefone:'33225765'},
    {id:3,nome:'Gabriel', sobrenome:'Marcos',telefone:'33223445'},
    {id:4,nome:'Ana', sobrenome:'Alvares',telefone:'33221325'},
  ];
  alunoSelecionado?:Aluno

  constructor() { }

  ngOnInit(): void {
  }

  AlunoSelect(aluno:Aluno){
    this.alunoSelecionado=aluno
  }

  Voltar(){
    this.alunoSelecionado=undefined
  }

}
