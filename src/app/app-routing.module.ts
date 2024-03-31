import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { CayCanhComponent } from './cay-canh/cay-canh.component';
import { SenDaComponent } from './sen-da/sen-da.component';
import { ThuySinhComponent } from './thuy-sinh/thuy-sinh.component';


const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'list', component: ProductListComponent, title: 'Product list' },
  { path: 'userlist', component: UserListComponent, title: 'User list' },

  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Detail' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'caycanh', component: CayCanhComponent, title: 'Cay Canh' },
  { path: 'senda', component: SenDaComponent, title: 'Sen da' },
  { path: 'thuysinh', component: ThuySinhComponent, title: 'Thuy sinh' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
