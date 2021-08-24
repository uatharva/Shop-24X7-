import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res['products'];
    });
  }

  deleteProduct(id: string) {
    this.adminService.deleteProduct(id).subscribe((res) => {
      alert('Product deleted!');
      this.productService.getProducts().subscribe((res) => {
        this.products = res['products'];
      });
    });
  }
}
