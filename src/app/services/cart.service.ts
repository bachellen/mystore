import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  products: Product[] = [];
/* . . . */

  addToCart(product: Product) {
    var index = this.products.findIndex(x => x.id==product.id);
    if ( index=== -1){
    this.products.push(product);}
    else {
     this.products =  this.products.map((item) => {
        if (item.id === product.id) {
            return {
                ...item,
                amount: Number(item.amount)+Number(product.amount),
            };
        }
        return item;
    });
    }
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
/* . . . */
}