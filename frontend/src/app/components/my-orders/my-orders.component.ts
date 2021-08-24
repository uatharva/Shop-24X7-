import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order/order';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  order: Order[] = [];
  currOrderDetailsId: any;
  products: any[];
  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {
    this.currOrderDetailsId = 0;
    this.products = [];
  }

  ngOnInit(): void {
    let id = localStorage.getItem('id').toString();
    let user = localStorage.getItem('user').toString();
    this.orderService.getOrders().subscribe((res) => {
      if (user === 'admin') {
        this.order = res['orders'];
      } else {
        res['orders'].forEach((element) => {
          if (element.userid == id) {
            this.order.push(element);
          }
        });
        // this.order = res['orders'];
        console.log(JSON.stringify(this.order));
      }
    });
  }

  showProducts(orderId) {
    this.currOrderDetailsId = orderId;
  }
}
