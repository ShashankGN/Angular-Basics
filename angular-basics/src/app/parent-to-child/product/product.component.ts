import { Component, Input } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductChildComponent {
  @Input() eachProduct:Product=null!;
  @Input() eachProductId:number=null!;
  @Input() eachProductName:string=null!;
  @Input() eachProductPrice:number=null!;
  
}
