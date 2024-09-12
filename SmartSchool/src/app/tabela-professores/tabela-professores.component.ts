import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-tabela-professores',
  templateUrl: './tabela-professores.component.html',
  styleUrls: ['./tabela-professores.component.css']
})
export class TabelaProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public titulo='Professores'
  public professorSelecionado?:Professor
  public texto:string=''
  public professoresForm!:FormGroup
  public professores!:Professor[]

  
  constructor(private fb:FormBuilder,private modalService: BsModalService, private professorService:ProfessorService) { 
    this.criaForm()
  }

  ngOnInit(): void {
    this.carregarProfessores()
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  criaForm(){
    this.professoresForm=this.fb.group({
      id:[''],
      nome:['', Validators.required],
      disciplina:['', Validators.required]
    })
  }

  carregarProfessores(){
    this.professorService.getAll().subscribe(
      (professores:Professor[]) => {console.log(professores),this.professores=professores},
      (erro:any) => {console.log(erro);
      }
    )
  }
 
  salvaProfessor(professor:Professor){

    if (professor.id === 0){
      this.professorService.post(professor).subscribe(
        (model:Professor) => {console.log(model), this.carregarProfessores();},
        (erro:any) => {console.log(erro);
        }
      )
    }
    else{
      this.professorService.put(professor).subscribe(
        (model:Professor) => {console.log(model), this.carregarProfessores();},
        (erro:any) => {console.log(erro);
        }
      )
    }
  }

  deleteProfessor(professor:Professor){
    this.professorService.delete(professor).subscribe(
      (model:Professor) => {console.log(model), this.carregarProfessores();},
      (erro:any) => {console.log(erro); this.carregarProfessores()}
    )
  }
    
  professorSubmit(){
    this.salvaProfessor(this.professoresForm.value)
  }

  professorSelect(professor:Professor){
    this.professorSelecionado=professor
    this.professoresForm.patchValue(professor)
  }

  newProfessor(){
    this.professorSelecionado = new Professor()
    this.professoresForm.patchValue(this.professorSelecionado)
  }

  

  Voltar(){
    this.professorSelecionado=undefined
  }
}
