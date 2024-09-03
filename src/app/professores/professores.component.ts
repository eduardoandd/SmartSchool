import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo='Professores'
  public professorSelecionado?:Professor
  public texto:string=''
  public professoresForm!:FormGroup
  public professores= [
    {id:1,nome:'Marcos',disciplina:'Matemática'},
    {id:2,nome:'Antonio',disciplina:'Fisíca'},
    {id:3,nome:'Bianca',disciplina:'Geografia'},
    {id:4,nome:'Paulo',disciplina:'Filosofia'},
  ]



  constructor(private fb:FormBuilder) { 
    this.criaForm()
  }

  ngOnInit(): void {
  }

  criaForm(){
    this.professoresForm=this.fb.group({
      nome:['', Validators.required],
      disciplina:['', Validators.required]
    })
  }

  professorSubmit(){
    console.log(this.professoresForm.value);
  }

  professorSelect(professor:Professor){
    this.professorSelecionado=professor
    this.professoresForm.patchValue(professor)
  }
  Voltar(){
    this.professorSelecionado=undefined
  }

}
