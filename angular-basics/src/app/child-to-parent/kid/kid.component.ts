import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.css'
})
export class KidComponent {
  @Output()
  onChildButtonClickedEvent=new EventEmitter<string>();
  onChildButtonClicked(input:HTMLInputElement){
    this.onChildButtonClickedEvent.emit(input.value);
  }
}
