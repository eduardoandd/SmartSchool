import { Order } from "./order"

export class Delivery {
    id:number=0
    shipping:String = ''
    order!:Order[]
}
