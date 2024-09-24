import { Component } from '@angular/core';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrl: './adult.component.css'
})
export class AdultComponent {
  onMessageRecieved(message:string){
    alert(message);
  }
}
