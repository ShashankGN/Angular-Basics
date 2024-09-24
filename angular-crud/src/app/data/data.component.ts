import { Component } from '@angular/core';
import { UpdateEventData } from '../card/card.component';
import { UpdateProductData } from '../pop-up/pop-up.component';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  data!:Product[]
  constructor(private _productService:ProductService){
    this.data=this._productService.getAllProducts();
  }
  DeleteProduct(id:number){
    this.data=this._productService.deleteProduct(id);
  }
  onAddButtonClicked(productName:HTMLInputElement,productPrice:HTMLInputElement){
     let price=Number(productPrice.value);
     this.data=this._productService.addProduct(productName.value,price);
  }
  updateId!:number;
  popupShow!:boolean;
  UpdateProduct(eventData:UpdateEventData){
    const { id, flag } = eventData;
    this.updateId=id;
    this.popupShow=flag;
  }

  Changeflag(flag:boolean){
    this.popupShow=flag;
  }

  UpdateData(temp:UpdateProductData){
    this.popupShow=temp.flag;
    this.data=this._productService.updateProduct(temp.id,temp.name,temp.price);
  }
}
