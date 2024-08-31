import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo='Professores'

  professores= [
    {nome:'Marcos'},
    {nome:'Antonio'},
    {nome:'Bianca'},
    {nome:'Paulo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
