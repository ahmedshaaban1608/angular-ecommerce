import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StockPipe } from './pipes/stock.pipe';
import { RegularPricePipe } from './pipes/regular-price.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SingleProductComponent,
    ProductStoreComponent,
    NotFoundPageComponent,
    ProductListComponent,
    ProductCardComponent,
    StockPipe,
    RegularPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
