import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {


AddToCart(product: Product,amount: number) {
  this.product.amount =  amount
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}

@Input() product : Product;
amount : number = 1
constructor(private cartService: CartService) {
  this.product = {id:0,
  name:'product',
  price:0.0,
  url:'none',
  description:'none',
  amount : 1
}
}
}
