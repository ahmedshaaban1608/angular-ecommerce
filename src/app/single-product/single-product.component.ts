import { Component } from '@angular/core';
import * as productJson from './../../assets/products-list.json';
import { Iproduct } from '../interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  product!: Iproduct;
  id: number = 0;
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot['params']['id'];
    const arr: any = Object.values(productJson);
    this.product = arr[arr.length - 1].find((p: Iproduct) => p.id == this.id);
    this.titleService.setTitle(this.product.title);
  }
  changeImage(img: string) {
    this.product.thumbnail = img;
  }
}
