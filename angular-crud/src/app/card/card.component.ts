import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';


export interface UpdateEventData {
  id: number;
  flag: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {
  // @Input() Id!:number;
  // @Input() Name!:string;
  // @Input() Price!:number;
  @Input() eachProduct!:Product;
  @Output()
  OnDeleteButtonClickedEvent=new EventEmitter<number>();
  OnDeleteButtonClicked(id:number){
    this.OnDeleteButtonClickedEvent.emit(id);
  }

  
  popupId!:number;
  popupShow:boolean=false;
  @Output()
  OnUpdateButtonClickedEvent=new EventEmitter<UpdateEventData>();
  OnUpdateButtonClicked(id:number){
    this.popupId=id;
    this.popupShow=true;
    this.OnUpdateButtonClickedEvent.emit({ id, flag: this.popupShow });
  }
}
