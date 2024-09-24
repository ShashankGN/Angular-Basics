import { Component } from "@angular/core";


@Component({
    selector:'app-class-binding',
    templateUrl:'./class-binding.component.html',
    styleUrl:'./class-binding.component.css'
})
export class ClassBindingComponent{
    okClass="text-ok";
    hasError=true;
    allClasses={
        "text-ok":!this.hasError,
        "text-all":true
    }
}