import { Product } from "./Product";

export class Order {
  id:number=0;
  product!: Product[]; 
  adress: any;        
  total_price?: number;
}
