import { Component, OnInit, TemplateRef } from '@angular/core';
import { Customer } from '../models/Customers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public selectedCustomer?: Customer
  public customerForm!: FormGroup
  public customers!: Customer[]
  public modalRef?: BsModalRef;
  public titulo = 'Clientes'


  constructor(private customerSerivce:CustomerService, private modalService: BsModalService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.loadCustomers()
  }

  createForm(){
    this.customerForm = this.fb.group({
      CustomersId:['', Validators.required],
      Name:['', Validators.required],
      Agee:['', Validators.required],
    })
  }

  loadCustomers(){
    console.log('Executando método de recarga..')
    this.customerSerivce.getAll().subscribe(
      (customers:Customer[]) => {this.customers = customers},
      (erro:any) => {console.log(erro)}
    )
  }

  saveCustomer(customer:Customer){
    if(customer.CustomersId != 0){
      this.customerSerivce.put(customer).subscribe(
        (model:Customer) => {
          console.log(model); 
          this.loadCustomers(); 
        },
        (erro:any) => {
          console.log(erro);
        }
      );
    } else {
      this.customerSerivce.post(customer).subscribe(
        (model:Customer) => {
          console.log(model); 
          this.loadCustomers(); 
        },
        (erro:any) => {
          console.log(erro);
        }
      );
    }
  }
  

  newCustomer(){
    this.selectedCustomer = new Customer()
    this.customerForm.patchValue(this.selectedCustomer)
  }

  customerSubmit(){
    this.saveCustomer(this.customerForm.value)
  }

  customerSelect(customer:Customer){
    this.selectedCustomer = customer
    this.customerForm.patchValue(customer)
  }

  voltar(){
    this.selectedCustomer = undefined
  }

  deleteCustomer(customer:Customer){
    this.customerSerivce.delete(customer).subscribe(
      (model:Customer) => {console.log(model); this.loadCustomers()},
      (erro:any) => {console.log(erro)}
    )
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
