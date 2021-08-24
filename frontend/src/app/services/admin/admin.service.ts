import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.httpClient.post('/api/v1/admin/products', product);
  }

  deleteProduct(id: any): Observable<any> {
    return this.httpClient.delete('/api/v1/admin/products/' + id);
  }
  editProduct(product: any, id: any): Observable<any> {
    return this.httpClient.post('/api/v1/admin/products/' + id, product);
  }
}
