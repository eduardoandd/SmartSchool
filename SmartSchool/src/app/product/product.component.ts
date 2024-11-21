import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public selectedProduct?: Product
  public productForm!: FormGroup
  public products!: Product[]
  public modalRef?: BsModalRef;
  public titulo = 'Produtos'


  constructor(private productSerivce:ProductService, private modalService: BsModalService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  createForm(){
    this.productForm = this.fb.group({
      id:['', Validators.required],
      Name:['', Validators.required],
      Price:['', Validators.required],
    })
  }

  loadProduct(){
    this.productSerivce.getAll().subscribe(
      (products:Product[]) => {this.products = products},
      (erro:any) => {console.log(erro)}
    )
  }

  saveProduct(product:Product){

    if(product.id != 0){
      this.productSerivce.put(product).subscribe(
        (model:Product) => {console.log(model); this.loadProduct()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    else{
      this.productSerivce.post(product).subscribe(
        (model:Product) => {console.log(model); this.loadProduct()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    
  }

  newProduct(){
    this.selectedProduct = new Product()
    this.productForm.patchValue(this.selectedProduct)
  }

  productSubmit(){
    this.saveProduct(this.productForm.value)
  }

  productSelect(product:Product){
    this.selectedProduct = product
    this.productForm.patchValue(product)
  }

  voltar(){
    this.selectedProduct = undefined
  }

  deleteProduct(product:Product){
    this.productSerivce.delete(product).subscribe(
      (model:Product) => {console.log(model); this.loadProduct()},
      (erro:any) => {console.log(erro)}
    )
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
