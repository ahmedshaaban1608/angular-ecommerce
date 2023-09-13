import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductStoreComponent } from './product-store/product-store.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductStoreComponent,
    title: 'Ecommerce & Angular',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: 'Register',
  },
  {
    path: 'product/:id',
    component: SingleProductComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
    title: 'Cart',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: '404 - page not found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
