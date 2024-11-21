import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from '../models/Employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public selectedEmployee?: Employee
  public customerForm!: FormGroup
  public employees!: Employee[]
  public modalRef?: BsModalRef;
  public titulo = 'Funcionarios'


  constructor(private employeeSerivce:EmployeeService, private modalService: BsModalService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.loadEmployees()
  }

  createForm(){
    this.customerForm = this.fb.group({
      id:['', Validators.required],
      name:['', Validators.required],
      age:['', Validators.required],
      department:['', Validators.required],
    })
  }

  loadEmployees(){
    this.employeeSerivce.getAll().subscribe(
      (employees:Employee[]) => {this.employees = employees},
      (erro:any) => {console.log(erro)}
    )
  }

  saveEmployees(employee:Employee){

    if(employee.id != 0){
      this.employeeSerivce.put(employee).subscribe(
        (model:Employee) => {console.log(model); this.loadEmployees()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    else{

      this.employeeSerivce.post(employee).subscribe(
        (model:Employee) => {console.log(model); this.loadEmployees()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    
  }

  newEmployees(){
    this.selectedEmployee = new Employee()
    this.customerForm.patchValue(this.selectedEmployee)
  }

  employeesSubmit(){
    this.saveEmployees(this.customerForm.value)
  }

  employeesSelect(employee:Employee){
    this.selectedEmployee = employee
    this.customerForm.patchValue(employee)
  }

  voltar(){
    this.selectedEmployee = undefined
  }

  deleteEmployees(employee:Employee){
    this.employeeSerivce.delete(employee).subscribe(
      (model:Employee) => {console.log(model); this.loadEmployees()},
      (erro:any) => {console.log(erro)}
    )
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
