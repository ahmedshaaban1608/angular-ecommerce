import { Component } from '@angular/core';
import * as productJson from './../../assets/products-list.json';
import { Iproduct } from '../interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductApiService } from '../services/product-api.service';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router,
    private apiService: ProductApiService,
    private cartService: CartServiceService
  ) {}
  product!: any;
  id: number = 0;
  isInCart: boolean = false;
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot['params']['id'];
    this.apiService.getProductById(this.id).subscribe(
      (data) => {
        this.product = data;
        this.titleService.setTitle(this.product['title']);
        this.cartService.getCartList().subscribe((data) => {
          const productInCart = data.find((p) => p.id === this.product.id);
          console.log(productInCart);

          this.isInCart = productInCart ? true : false;
        });
      },
      (error) => {
        this.router.navigate(['product']);
      }
    );
  }
  changeImage(img: string) {
    this.product.thumbnail = img;
  }
  addProductToCart() {
    this.cartService.addToCartList(this.product);
  }
}
