import { Component } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { IcartProduct } from '../interfaces/icart-product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productArr!: IcartProduct[];
  sortOption: string = 'Sort Products';
  searchText: string = '';
  constructor(private apiService: ProductApiService) {}
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => {
      this.productArr = Object.values(data)[0];
    });
  }
  sortProducts() {
    switch (this.sortOption) {
      case 'title':
        this.sortByTitle();
        break;
      case 'minPrice':
        this.sortByMinPrice();
        break;
      case 'maxPrice':
        this.sortByMaxPrice();
        break;
      case 'stock':
        this.sortByStock();
        break;

      default:
        break;
    }
  }
  sortByTitle() {
    const sorted = this.productArr.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    this.productArr = sorted;
  }
  sortByMinPrice() {
    const sorted = this.productArr.sort((a, b) => a.price - b.price);
    this.productArr = sorted;
  }
  sortByMaxPrice() {
    const sorted = this.productArr.sort((a, b) => b.price - a.price);
    this.productArr = sorted;
  }
  sortByStock() {
    const sorted = this.productArr.sort((a, b) => b.stock - a.stock);
    this.productArr = sorted;
  }
  searchProductsByKeyword() {
    this.apiService
      .getProductByKeyword(this.searchText)
      .subscribe((data) => (this.productArr = Object.values(data)[0]));
  }
}
