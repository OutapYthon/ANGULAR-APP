import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prodcuts = [
    {id:1, name: "MacBook", price : 22999, selected : true},
    {id:2, name: "Iphone 16", price : 15200, selected : false},
    {id:3, name: "Apple Watch", price : 3200, selected : true}
  ]
  constructor() {

  }
  getAllProducts(){
    return this.prodcuts
  }
  deleteProduct(product:any){
    this.prodcuts=this.prodcuts.filter(p=>p.id != product.id);
  }
}
