import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  recProducts: Product[];
  oldPrice: number;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.product = {};
    this.recProducts = [];
  }

  ngOnInit(): void {
    let productId = this.actRoute.snapshot.params.id;

    this.productService.getProductById(productId).subscribe((res) => {
      this.product = res['product'];
    });
    this.productService.getProducts().subscribe((res) => {
      this.recProducts = res['products']
        .filter(
          (p) => p.department === this.product.department && p._id !== productId
        )
        .slice(0, 3);
    });
  }

  goToDetails(pId) {
    let productId = pId;

    this.productService.getProductById(productId).subscribe((res) => {
      this.product = res['product'];
    });
    this.productService.getProducts().subscribe((res) => {
      this.recProducts = res['products']
        .filter(
          (p) => p.department === this.product.department && p._id !== productId
        )
        .slice(0, 3);
    });
  }

  addItemToCart(pId: any) {
    let userCart: any[];
    if (!localStorage.getItem('cart')) {
      localStorage.setItem(
        'cart',
        JSON.stringify([{ productId: pId, quantity: 1 }])
      );
    } else {
      userCart = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < userCart.length; i++) {
        if (userCart[i]['productId'] === pId) {
          userCart[i]['quantity'] += 1;
          break;
        } else if (i + 1 === userCart.length) {
          userCart.push({ productId: pId, quantity: 0 });
        }
      }
      localStorage.setItem('cart', JSON.stringify(userCart));
    }
  }
}
