import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user/user.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/order/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  user: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private orderService: OrderService
  ) {
    this.user = {};
  }

  ngOnInit(): void {
    let userId = localStorage.getItem('id');
    if (userId) {
      this.userService.getProfile(userId).subscribe((res) => {
        this.user = res['user'];
        this.user.email = this.user.username;
        this.user.address = this.user.address;
        this.user.city = this.user.city;
        this.user.state = this.user.state;
        this.user.zipCode = this.user.zipCode;
      });
    }
  }

  placeOrder() {
    let total: number;
    let cart: any[];
    if (localStorage.getItem('cartTotal') && localStorage.getItem('cart')) {
      total = JSON.parse(localStorage.getItem('cartTotal'));
      cart = JSON.parse(localStorage.getItem('cart'));
      let order = new Order(this.user.email, this.user._id, total, cart);
      this.orderService.addOrder(order).subscribe((res) => {
        console.log(res);
        alert('Order placed!');
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
        this.router.navigate(['/my-orders']);
      });
    }
  }
}
