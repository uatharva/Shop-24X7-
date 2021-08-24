import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  query: any;

  constructor() {
    this.query = {};
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  onLogOut() {
    localStorage.clear();
  }

  getCartItemTotal() {
    if (localStorage.getItem('cart')) {
      let cartItems = JSON.parse(localStorage.getItem('cart'));
      let total = 0;
      for (let item of cartItems) {
        total += item.quantity;
      }
      return total;
    }
    return 0;
  }
}
