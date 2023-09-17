import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { IcartProduct } from '../interfaces/icart-product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cartList!: IcartProduct[];
  totalPrice!: number;
  constructor(private cartService: CartServiceService) {}
  ngOnInit() {
    this.cartService.getCartList().subscribe((data) => (this.cartList = data));
    this.cartService
      .getTotalPrice()
      .subscribe((data) => (this.totalPrice = data));
  }
  removeProductFromCart(id: number) {
    this.cartService.removeFromCartList(id);
  }
  increaseProductQuantity(id: number) {
    this.cartService.increaseQuantity(id);
  }
  decreaseProductQuantity(id: number) {
    this.cartService.decreaseQuantity(id);
  }
}
