import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
})
export class ManageOrdersComponent implements OnInit {
  order: Order[];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res) => {
      this.order = res['orders'];
    });
  }
}
