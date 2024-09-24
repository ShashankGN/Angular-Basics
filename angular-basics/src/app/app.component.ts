import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // <h1>
  // This is Shashank
  // </h1>
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'angular-basics';
  name:string='Shashank';
  isDisabled:boolean=false;
  imagepath:string="https://th.bing.com/th/id/OIP.djC4JMsVjKt3oIX2CUR5-QHaE8?w=216&h=180&c=7&r=0&o=5&pid=1.7"


  greet():string{
    return 'Hey '+this.name;
  }

  sum():number{
    return 2+2;
  }

}


