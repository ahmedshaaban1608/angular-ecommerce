import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  counter!: number;
  totalPrice!: number;
  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.cartService
      .getCartCounter()
      .subscribe((data) => (this.counter = data));
    this.cartService
      .getTotalPrice()
      .subscribe((data) => (this.totalPrice = data));
  }
}
