import { Component } from "@angular/core";


@Component({
    selector:'app-class-binding',
    templateUrl:'./class-binding.component.html',
    styles:[
        `
        .text-success{
            color:green;
        }


        .text-danger{
            color:red;
        }

        .text-special{
            font-style:italic;
        }
        
        `
    ]
})
export class ClassBindingComponent{
    
    successClass="text-success";
    hasError=false;
    isSpecial=true;
    colour="blue";
    textdecoration="underline";
    imagepath:string="https://th.bing.com/th/id/OIP.djC4JMsVjKt3oIX2CUR5-QHaE8?w=216&h=180&c=7&r=0&o=5&pid=1.7";
    width="100px";
    widthh="50";
    styleExpression="color:blue;background-color:grey";
    styleExpressionList={
        backgroundColor:"yellow",
        color:"red",
        textDecoration:"underline"
    }
    messageClasses={
        "text-success":!this.hasError,
        "text-danger":this.hasError,
        "text-special":this.isSpecial
    }
}