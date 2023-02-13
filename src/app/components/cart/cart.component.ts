import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

Total:  number = 0
products = this.cartService.getProducts();

constructor(private cartService: CartService,
  private router: Router ){}

ngOnInit(): void {
    this.getTotal();
  }

OnChange($event: Event, product: Product) {
if (Number(($event.target as HTMLInputElement).value) < 1){
  this.deleteProduct(product.id)
  window.alert('Removed from cart!');
}
this.getTotal();
}

deleteProduct(id: number) {

  this.products = this.products.filter(
    (product: Product) => product.id !== id
  );
}
Checkout(event : any) {
  this.cartService.clearCart()
  this.router.navigate([`/confirmation/${event.fullName}/${this.Total}`])
  }
getTotal() {
    this.Total = this.products.reduce((x, product) => {
      this.Total = Number((x + product.price * product.amount).toFixed(2))
      return this.Total;
    }, 0);
  }

}
