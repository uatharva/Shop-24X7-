import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  topProducts: Product[];

  constructor(private productService: ProductService) {
    this.topProducts = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res['products'];
      this.products = this.shuffleArray([...this.products]);
      this.topProducts = this.getTopProducts([...this.products]);
    });
  }

  getTopProducts(products: Product[]) {
    let lastDepartment = '';
    let topProducts = [];
    products.sort(this.getSortOrder('department'));
    for (let currProduct of products) {
      let currDepartment = currProduct.department;
      if (currDepartment === lastDepartment) {
        if (currProduct.sold > topProducts[topProducts.length - 1].sold) {
          topProducts[topProducts.length - 1] = currProduct;
        }
      } else {
        topProducts.push(currProduct);
      }
      lastDepartment = currDepartment;
    }
    return topProducts;
  }

  getSortOrder(prop: string) {
    return function (p1: Product, p2: Product) {
      if (p1[prop] > p2[prop]) {
        return 1;
      } else if (p1[prop] < p2[prop]) {
        return -1;
      }
      return 0;
    };
  }

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array: Product[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
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
