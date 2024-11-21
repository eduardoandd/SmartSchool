import { Component, OnInit, TemplateRef } from '@angular/core';
import { Stock } from '../models/Stock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public selectedStock?: Stock
  public stockForm!: FormGroup
  public stocks!: Stock[]
  public modalRef?: BsModalRef;
  public titulo = 'Estoque'


  constructor(private stockSerivce:StockService, private modalService: BsModalService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.loadStock()
  }

  createForm(){
    this.stockForm = this.fb.group({
      id:['', Validators.required],
      item:['', Validators.required],
      quantity:['', Validators.required],
    })
  }

  loadStock(){
    this.stockSerivce.getAll().subscribe(
      (stocks:Stock[]) => {this.stocks = stocks},
      (erro:any) => {console.log(erro)}
    )
  }

  saveStock(stock:Stock){

    if(stock.id != 0){
      this.stockSerivce.put(stock).subscribe(
        (model:Stock) => {console.log(model); this.loadStock()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    else{

      this.stockSerivce.post(stock).subscribe(
        (model:Stock) => {console.log(model); this.loadStock()},
        (erro:any) => {console.log(erro);}
        
      )
    }
    
  }

  newStock(){
    this.selectedStock = new Stock()
    this.stockForm.patchValue(this.selectedStock)
  }

  stockSubmit(){
    this.saveStock(this.stockForm.value)
  }

  stockSelect(stock:Stock){
    this.selectedStock = stock
    this.stockForm.patchValue(stock)
  }

  voltar(){
    this.selectedStock = undefined
  }

  deleteStock(stock:Stock){
    this.stockSerivce.delete(stock).subscribe(
      (model:Stock) => {console.log(model); this.loadStock()},
      (erro:any) => {console.log(erro)}
    )
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
