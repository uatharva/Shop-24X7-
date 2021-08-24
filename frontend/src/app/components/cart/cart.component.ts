import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any[];
  total: number;

  constructor(private productService: ProductService, private router: Router) {
    this.cart = [];
    this.total = 0;
  }

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < this.cart.length; i++) {
        this.productService
          .getProductById(this.cart[i]['productId'])
          .subscribe((res) => {
            this.cart[i]['title'] = res['product']['title'];
            this.cart[i]['discountPrice'] = res['product']['discountPrice'];
            this.cart[i]['price'] = res['product']['price'];
            this.cart[i]['currPrice'] =
              res['product']['price'] * this.cart[i]['quantity'];
            this.total += this.cart[i]['currPrice'];
          });
      }
    }
  }

  removeProduct(pId: number) {
    this.cart = [...this.cart].filter((p) => p['productId'] !== pId);
    alert('Product removed from cart!');
    if (this.cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      localStorage.removeItem('cart');
    }
  }

  checkout() {
    localStorage.setItem('cartTotal', this.total + '');
    this.router.navigate(['/checkout']);
  }
}
