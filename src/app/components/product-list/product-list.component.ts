import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[]
  constructor(private dataService : DataService){
    this.products = []
  }
  ngOnInit() : void {
    this.setProducts()
  }

  setProducts () : void {
    this.dataService.getData().subscribe((res) =>{
     this.products = res;
     
    })
  }

}
