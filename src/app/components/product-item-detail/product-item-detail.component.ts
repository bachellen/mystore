import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

amount : number = 1
products : Product[] = []
id: number = 1;
  product! : Product;
constructor(private cartService :CartService,
  private dataService :DataService,
  private route: ActivatedRoute){}

ngOnInit(): void{
  this.id = Number(this.route.snapshot.paramMap.get("productId"))
  this.getProduct()
  this.amount = this.product.amount
}
AddToCart(product: Product, amount : number) {
  this.product.amount = amount
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}


getProduct(){
  this.dataService.getData().subscribe((res) =>{
    this.products = res;
    this.product = this.products.filter((item) => item.id === this.id)[0];
   })
// this.product = this.products.pipe( )
}

}
