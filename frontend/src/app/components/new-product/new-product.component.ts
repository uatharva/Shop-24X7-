import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  product: any;
  constructor(private router: Router, private adminService: AdminService) {
    this.product = {};
  }

  ngOnInit(): void {
    this.product.department = 'Cell Phones';
  }

  addProduct() {
    this.adminService.addProduct(this.product).subscribe((res) => {
      alert('Product added!');
      this.router.navigate(['/manage-products']);
    });
  }
}
