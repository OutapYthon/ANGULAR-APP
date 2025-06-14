import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  prodcuts! : Array<any>;
  constructor(private productsService : ProductsService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    this.prodcuts = this.productsService.getAllProducts();
  }
  handleDelete(product:any){
    let v = confirm('Are you sure you want to delete this product ?');
    if (v)
    {
      this.productsService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
