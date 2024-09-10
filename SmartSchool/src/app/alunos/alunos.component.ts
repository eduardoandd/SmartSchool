import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { AlunoService } from '../services/aluno.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  public modalRef?: BsModalRef;
  public titulo='Alunos'
  public alunoSelecionado?:Aluno
  public alunoForm!: FormGroup
  public alunos!: Aluno[];
  

  constructor(private fb: FormBuilder,private modalService: BsModalService, private alunoService:AlunoService) { 
    this.criaForm()
  }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  criaForm(){
    this.alunoForm=this.fb.group({
      id:['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['',Validators.required],
      telefone: ['',Validators.required]
    })
  }


  carregarAlunos(){
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {this.alunos = alunos},
      (erro:any) => {console.log(erro);
      }
    );
  }
  
  salvarAluno(aluno:Aluno){
    this.alunoService.put(aluno.id,aluno).subscribe(
      (model:Aluno) =>{console.log(model); this.carregarAlunos();},
      (erro:any) => {console.log(erro);
      }
    );  
  }

  alunoSubmit(){
    this.salvarAluno(this.alunoForm.value)
  }

  AlunoSelect(aluno:Aluno){
    this.alunoSelecionado=aluno
    this.alunoForm.patchValue(aluno)
  }

  Voltar(){
    this.alunoSelecionado=undefined
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
