import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList!:Product[]
  constructor() { 
    this.productList=[
      { id: 1, name: "Soap", price: 100 },
      { id: 2, name: "ToothBrush", price: 50 },
      { id: 3, name: "Toothpaste", price: 75 }
    ]
  }

  getAllProducts(){
    return this.productList;
  }

  deleteProduct(id:number){
    this.productList=this.productList.filter(item=>item.id!==id);
    return this.productList;
  }

  addProduct(productName:string,productPrice:number){
    let Id=Math.max(...this.productList.map(item=>item.id))+1;
    const temp:Product={
      id:Id,
      name:productName,
      price:productPrice
    };
    this.productList.push(temp);
    return this.productList;
  }

  updateProduct(id:number,productName:string,productPrice:number){
    let temp:any=this.productList.find(x=>x.id==id);
    temp.name=productName;
    temp.price=productPrice;
    return this.productList;
  }
}
