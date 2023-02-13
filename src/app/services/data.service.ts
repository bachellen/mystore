import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product} from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getData() : Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json')
  }
}
