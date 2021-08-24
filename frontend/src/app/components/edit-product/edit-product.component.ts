import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product: any;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private adminService: AdminService
  ) {
    this.product = {};
  }

  ngOnInit(): void {
    let productId = this.actRoute.snapshot.params.id;
    this.productService.getProductById(productId).subscribe((res) => {
      this.product = res['product'];
    });
  }

  saveProductChanges() {
    let productId = this.actRoute.snapshot.params.id;
    this.adminService.editProduct(this.product, productId).subscribe((res) => {
      alert('Product changes saved!');
      this.router.navigate(['/manage-products']);
    });
  }
}
