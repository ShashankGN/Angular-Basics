import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[];
  constructor() {
    this.productList = [
      { id: 1, name: "Soap", price: 100 },
      { id: 2, name: "ToothBrush", price: 50 },
      { id: 3, name: "Toothpaste", price: 75 }
    ]
  }
}
