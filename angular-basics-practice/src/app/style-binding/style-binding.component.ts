import {Component  } from "@angular/core";

@Component({
    selector:'app-style-binding',
    templateUrl:'./style-binding.component.html',
    styleUrl:'./style-binding.component.css'
})
export class StyleBindingComponent{
    colour="blue";
    imagepath="https://th.bing.com/th/id/OIP.djC4JMsVjKt3oIX2CUR5-QHaE8?w=216&h=180&c=7&r=0&o=5&pid=1.7";
    width="50%";
    widthh="50";
    styleExpression="color:blue;background-color:grey";
    styleExpressionList={
        backgroundColor:"yellow",
        color:"red",
        textDecoration:"underline"
    }

}