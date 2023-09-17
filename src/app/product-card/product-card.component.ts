import { Component, Input } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { CartServiceService } from '../services/cart-service.service';
import { IcartProduct } from '../interfaces/icart-product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Iproduct;
  isInCart: boolean = false;
  constructor(private cartService: CartServiceService) {}
  ngOnInit() {
    this.cartService.getCartList().subscribe((data) => {
      const productInCart = data.find((p) => p.id === this.product.id);
      this.isInCart = productInCart ? true : false;
    });
  }

  addProductToCart() {
    this.cartService.addToCartList(this.product);
  }
}
