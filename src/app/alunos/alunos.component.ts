import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo='Alunos'
  public alunoSelecionado?:Aluno
  public alunoForm!: FormGroup
  public alunos=[
    {id:1,nome:'Eduardo', sobrenome:'Andrade',telefone:'34533225'},
    {id:2,nome:'Pedro', sobrenome:'Antonio',telefone:'33225765'},
    {id:3,nome:'Gabriel', sobrenome:'Marcos',telefone:'33223445'},
    {id:4,nome:'Ana', sobrenome:'Alvares',telefone:'33221325'},
  ];
  

  constructor(private fb: FormBuilder) { 
    this.criaForm()
  }

  ngOnInit(): void {
  }

  criaForm(){
    this.alunoForm=this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['',Validators.required],
      telefone: ['',Validators.required]
    })
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
    
  }

  AlunoSelect(aluno:Aluno){
    this.alunoSelecionado=aluno
    this.alunoForm.patchValue(aluno)
  }

  Voltar(){
    this.alunoSelecionado=undefined
  }

}
