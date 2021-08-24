import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { AuthGuardService } from './guards/auth/auth.guard';
import { LoginRegisterGuard } from './guards/login-register/login-register.guard';
import { AdminGuardService } from './guards/auth/admin.guard';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    canActivate: [AuthGuardService],
  },
  {
    component: LoginComponent,
    path: 'login',
    canActivate: [LoginRegisterGuard],
  },
  {
    component: RegisterComponent,
    path: 'register',
    canActivate: [LoginRegisterGuard],
  },
  {
    component: ProfileComponent,
    path: 'profile',
    canActivate: [AuthGuardService],
  },
  {
    component: DepartmentsComponent,
    path: 'departments',
    canActivate: [AuthGuardService],
  },
  {
    component: ProductDetailComponent,
    path: 'product-details/:id',
    canActivate: [AuthGuardService],
  },
  {
    component: CartComponent,
    path: 'cart',
    canActivate: [AuthGuardService],
  },
  {
    component: CheckoutComponent,
    path: 'checkout',
    canActivate: [AuthGuardService],
  },
  {
    component: EditOrderComponent,
    path: 'edit-order/:id',
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    component: MyOrdersComponent,
    path: 'my-orders',
    canActivate: [AuthGuardService],
  },
  {
    component: NewProductComponent,
    path: 'new-product',
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    component: EditProductComponent,
    path: 'edit-product/:id',
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    component: ManageProductsComponent,
    path: 'manage-products',
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    component: ManageOrdersComponent,
    path: 'manage-orders',
    canActivate: [AuthGuardService, AdminGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
