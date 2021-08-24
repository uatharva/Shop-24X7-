import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './directives/must-match.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { SentencePipe } from './pipes/sentence/sentence.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { SearchPipe } from './pipes/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MustMatchDirective,
    ProfileComponent,
    HomeComponent,
    DepartmentsComponent,
    ProductDetailComponent,
    TruncatePipe,
    SentencePipe,
    CartComponent,
    CheckoutComponent,
    MyOrdersComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    SearchPipe,
    NewProductComponent,
    EditProductComponent,
    EditOrderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
