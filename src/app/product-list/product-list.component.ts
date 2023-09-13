import { Component } from '@angular/core';
import * as productJson from './../../assets/products-list.json';
import { Iproduct } from '../interfaces/iproduct';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productArr!: Array<Iproduct>;
  ngOnInit(): void {
    const arr: any = Object.values(productJson);
    this.productArr = arr[arr.length - 1];
  }
}
