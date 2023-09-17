import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproduct } from '../interfaces/iproduct';
import { IcartProduct } from '../interfaces/icart-product';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private counter = new BehaviorSubject<number>(0);
  private totalPrice = new BehaviorSubject<number>(0);
  private cartList = new BehaviorSubject<IcartProduct[]>([]);

  constructor() {}

  getCartList() {
    return this.cartList.asObservable();
  }
  getCartCounter() {
    return this.counter.asObservable();
  }
  getTotalPrice() {
    const cartListArr = this.cartList.getValue();
    let price = 0;
    cartListArr.forEach((product) => {
      price += product.price * product.quantity;
    });
    this.totalPrice.next(price);

    return this.totalPrice.asObservable();
  }

  addToCartList(product: Iproduct) {
    const cartListArr = this.cartList.getValue();
    cartListArr.push({ ...product, quantity: 1 });
    this.cartList.next(cartListArr);
    this.counter.next(cartListArr.length);
    this.getTotalPrice();
  }

  removeFromCartList(id: number) {
    const cartListArr = this.cartList.getValue();
    const index = cartListArr.findIndex((p) => p['id'] == id);
    if (index !== -1) {
      cartListArr.splice(index, 1);
      this.cartList.next(cartListArr);
      this.counter.next(cartListArr.length);
      this.getTotalPrice();
    }
  }
  increaseQuantity(id: number) {
    const cartListArr = this.cartList.getValue();
    const index = cartListArr.findIndex((p) => p['id'] == id);
    if (index !== -1) {
      if (cartListArr[index].stock > cartListArr[index].quantity) {
        cartListArr[index].quantity++;
        this.cartList.next(cartListArr);
        this.getTotalPrice();
      }
    }
  }
  decreaseQuantity(id: number) {
    const cartListArr = this.cartList.getValue();
    const index = cartListArr.findIndex((p) => p['id'] == id);
    if (index !== -1) {
      if (cartListArr[index].quantity > 1) {
        cartListArr[index].quantity--;
        this.cartList.next(cartListArr);
        this.getTotalPrice();
      }
    }
  }
}
