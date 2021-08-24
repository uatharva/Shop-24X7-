import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('/api/v1/orders/');
  }
  getOrderById(id: any): Observable<Order> {
    return this.httpClient.get<Order>('/api/v1/orders/' + id);
  }

  addOrder(order: Order): Observable<any> {
    return this.httpClient.post('/api/v1/checkout/', order);
  }
}
