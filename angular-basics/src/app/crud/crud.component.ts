import { Component } from '@angular/core';
import { ProductModel } from './productModel';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent {
  productList:ProductModel[];
  constructor(){
    this.productList= [
      { id: 1, name: "Soap", price: 100 },
      { id: 2, name: "ToothBrush", price: 50 },
      { id: 3, name: "Toothpaste", price: 75 }
    ]
  }

  onDeleteButtonClicked(index:number){
    //we can use filter to display only the required contents(can be used incase if we are not using the array)
    this.productList.splice(index,1);
  }

  productname:string="";
  productprice:number=null!;
  onAddButtonClicked(id:HTMLInputElement,product:HTMLInputElement,price:HTMLInputElement){
    const temp:ProductModel={
      id:Number(id.value),
      name:product.value,
      price:Number(price.value)
    }
    this.productList.push(temp);
  }

  isShown:boolean=false;
  onGetAllButtonClicked(){
    this.isShown=!this.isShown;
  }
  
  indexref:number=null!;
  updateShown:boolean=false;
  idmatch:boolean=false;
  onUpdateButtonClicked(id:number,product:HTMLInputElement,price:HTMLInputElement){
    // this.updateShown=true;
    // this.indexref=index;
    const temp:any=this.productList.find(x=>x.id==id);
    temp.name=product.value;
    temp.price=Number(price.value);
    
  }
  onUpdateActionButtonClicked(id:number,product:string,price:string){
    // const temp:ProductModel=this.productList[Number(index)];
    // temp.id=Number(id.value);
    // temp.name=product.value;
    // temp.price=Number(price.value);
    // const temp:any=this.productList.find(x=>x.id==id);
    // temp.name=product.value;
    // temp.price=Number(price.value);
   
        // this.productList[index].id=Number(id.value);
        // this.productList[index].name=product.value;
        // this.productList[index].price=Number(price.value);

  }
}
