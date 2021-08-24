import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/v1/products');
    //return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id: any): Observable<Product> {
    return this.httpClient.get<Product>('/api/v1/products/' + id);
    //return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }
}
