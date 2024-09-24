import { Component } from '@angular/core';

@Component({
  selector: 'app-html-js-binding',
  templateUrl: './html-js-binding.component.html',
  styleUrl: './html-js-binding.component.css'
})
export class HtmlJsBindingComponent {
  greet(){
    console.log('Hi from greet!')
  }
  greetEvent(event:any){
    console.log('Hi from greetEvent!,The event is '+event.type);
  }
  fullname:string="";
  getFullName(fname:HTMLInputElement,lname:HTMLInputElement){
    console.log(`The fullname is ${fname.value} ${lname.value}`);
    this.fullname=fname.value+" "+lname.value;
  }
  actiondata:string="show";
  action(){
    if(this.actiondata=="show"){
      this.actiondata="hide";
    }
    else{
      this.actiondata="show";
    }
  }
  isShown:boolean=true;
  
}
