import { Component, OnInit, TemplateRef } from '@angular/core';
import { Order } from '../models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrdersService } from '../services/orders.service';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public selectedOrder?: Order
  public orderForm!: FormGroup
  public orders!: Order[]
  public modalRef?: BsModalRef;
  public titulo = 'Pedids'
  public products!: Product[]



  constructor(private productSerivce:ProductService,private orderSerivce:OrdersService, private modalService: BsModalService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.loadOrder()
    this.loadProduct()
  }

  createForm(){
    this.orderForm = this.fb.group({
      id:['', Validators.required],
      product:['', Validators.required],
      street:['', Validators.required],
      city:['', Validators.required],
      number:['', Validators.required],
    })
  }

  loadOrder(){
    this.orderSerivce.getAll().subscribe(
      (orders:Order[]) => {this.orders = orders},
      (erro:any) => {console.log(erro)}
    )
  }

  saveOrder(order: Order) {
    
    const formattedOrder = {
      ...order,
      Product: this.orderForm.value.product.map((id: number) => id), 
      adress: {
        street: this.orderForm.value.street,
        city: this.orderForm.value.city,
      }
    };
  
    if (order.id !== 0) {
      this.orderSerivce.put(formattedOrder).subscribe(
        (model: Order) => {
          console.log(model);
          this.loadOrder();
        },
        (erro: any) => {
          console.log(erro);
        }
      );
    } else {
      this.orderSerivce.post(formattedOrder).subscribe(
        (model: Order) => {
          console.log(model);
          this.loadOrder();
        },
        (erro: any) => {
          console.log(erro);
        }
      );
    }
  }
  

  newOrder(){
    this.selectedOrder = new Order()
    this.orderForm.patchValue(this.selectedOrder)
  }

  orderSubmit(){
    this.saveOrder(this.orderForm.value)
  }

  orderSelect(order:Order){
    this.selectedOrder = order
    this.orderForm.patchValue(order)
  }

  voltar(){
    this.selectedOrder = undefined
  }

  deleteOrder(order:Order){
    this.orderSerivce.delete(order).subscribe(
      (model:Order) => {console.log(model); this.loadOrder()},
      (erro:any) => {console.log(erro)}
    )
  }

  getProductList(order: Order): string {
    if (!order.product || order.product.length === 0) {
      return 'Nenhum produto';
    }
    return order.product.map(p => p.Name).join(', ');
  }

  

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  loadProduct(){
    this.productSerivce.getAll().subscribe(
      (products:Product[]) => {this.products = products},
      (erro:any) => {console.log(erro)}
    )
  }
}
