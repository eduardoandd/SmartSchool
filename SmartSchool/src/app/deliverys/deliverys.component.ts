import { Component, OnInit, TemplateRef } from '@angular/core';
import { Delivery } from '../models/delivery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeliverysService } from '../services/deliverys.service';
import { Order } from '../models/order';
import { OrdersComponent } from '../orders/orders.component';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-deliverys',
  templateUrl: './deliverys.component.html',
  styleUrls: ['./deliverys.component.css']
})
export class DeliverysComponent implements OnInit {

  public selectedDelivery?: Delivery
  public deliveryForm!: FormGroup
  public deliverys!: Delivery[]
  public modalRef?: BsModalRef;
  public titulo = 'Entregas'
  public order!: Order[]


  constructor(private orderService:OrdersService,private deliverySerivce:DeliverysService, private modalService: BsModalService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.loadDelivery()
    this.loadOrder()
  }

  createForm(){
    this.deliveryForm = this.fb.group({
      id:['', Validators.required],
      shipping:['', Validators.required],
      order:['', Validators.required],
    })
  }

  loadDelivery(){
    this.deliverySerivce.getAll().subscribe(
      (delivery:Delivery[]) => {this.deliverys = delivery},
      (erro:any) => {console.log(erro)}
    )
  }

  saveDelivery(delivery:Delivery){

    if(delivery.id != 0){
      this.deliverySerivce.put(delivery).subscribe(
        (model:Delivery) => {console.log(model); this.loadDelivery()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    else{
      this.deliverySerivce.post(delivery).subscribe(
        (model:Delivery) => {console.log(model); this.loadDelivery()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    
  }

  newDelivery(){
    this.selectedDelivery = new Delivery()
    this.deliveryForm.patchValue(this.selectedDelivery)
  }

  deliverySubmit(){
    const deliveryData = { ...this.deliveryForm.value, order: this.deliveryForm.value.order[0] };

    console.log(this.deliveryForm.value); // Verifique se 'order' contém o valor correto
    this.saveDelivery(this.deliveryForm.value)
  }

  deliverySelect(delivery:Delivery){
    this.selectedDelivery = delivery
    this.deliveryForm.patchValue(delivery)
  }

  voltar(){
    this.selectedDelivery = undefined
  }

  deleteDelivery(delivery:Delivery){
    this.deliverySerivce.delete(delivery).subscribe(
      (model:Delivery) => {console.log(model); this.loadDelivery()},
      (erro:any) => {console.log(erro)}
    )
  }

  loadOrder(){
    this.orderService.getAll().subscribe(
      (orders:Order[]) => (this.order = orders),
      (erro:any) => {console.log(erro)}
    )
    
  }



  

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
