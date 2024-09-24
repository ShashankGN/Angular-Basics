import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

export interface UpdateProductData{
    id:number;
    name:string;
    price:number;
    flag:boolean;
}
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  @Input()
popupId!:number;
@Input()
popupShow!:boolean;

@Output() OnCloseButtonClickedEvent=new EventEmitter<boolean>();
OnCloseButtonClicked(){
  this.popupShow=false;
  this.OnCloseButtonClickedEvent.emit(false);
}

Name!:string;
Price!:number;
@Output()
OnSubmitButtonClickedEvent=new EventEmitter<UpdateProductData>();
OnSubmitButtonClicked(){
  this.popupShow=false;
  const temp:UpdateProductData={
    id:this.popupId,
    name:this.Name,
    price:this.Price,
    flag:this.popupShow
  }
  this.OnSubmitButtonClickedEvent.emit(temp);
  // console.log(this.popupId);
  // console.log(this.Name);
  // console.log(this.Price);
}
}
