import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  products: Product[];
  currDepartment: string;
  currPriceRange: number;
  priceRangeMin: number;
  priceRangeMax: number;

  constructor(private productService: ProductService) {
    this.products = [];
    this.currDepartment = 'Cell Phones';
    this.currPriceRange = 0;
    this.priceRangeMin = 0;
    this.priceRangeMax = 0;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res['products'];
      this.getProductsInDept();
    });
  }

  changeDepartment(department) {
    this.currDepartment = department;
  }

  changePriceRange(currPriceRange, priceRangeMin, priceRangeMax) {
    this.currPriceRange = currPriceRange;
    this.priceRangeMin = priceRangeMin;
    this.priceRangeMax = priceRangeMax;
  }

  getProductsInDept() {
    return this.products.filter((p) => p.department === this.currDepartment);
  }

  getProductsInPriceRange() {
    return this.products.filter(
      (p) =>
        p.price >= this.priceRangeMin &&
        p.price <= this.priceRangeMax &&
        p.department === this.currDepartment
    );
  }

  resetFilter() {
    this.currPriceRange = 0;
    this.priceRangeMin = 0;
    this.priceRangeMax = 0;
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
