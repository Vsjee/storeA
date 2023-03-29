import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts> {
    return this.http.get<IProducts>('https://dummyjson.com/products');
  }
}
