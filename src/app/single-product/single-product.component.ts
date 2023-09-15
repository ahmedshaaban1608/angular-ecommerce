import { Component } from '@angular/core';
import * as productJson from './../../assets/products-list.json';
import { Iproduct } from '../interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) {}
  product!: Iproduct;
  id: number = 0;
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot['params']['id'];
    const arr: any = Object.values(productJson);
    const productObj = arr[arr.length - 1].find(
      (p: Iproduct) => p.id == this.id
    );
    if (!productObj) {
      this.router.navigate(['product']);
    }
    this.product = productObj;
    this.titleService.setTitle(this.product.title);
  }
  changeImage(img: string) {
    this.product.thumbnail = img;
  }
}
