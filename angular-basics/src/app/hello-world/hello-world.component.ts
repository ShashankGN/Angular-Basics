import { Component } from "@angular/core";

@Component({
    selector:'app-hello-world',
    template:`
    <h2>
    Hi {{name}}
    </h2>
    <h2>
    This is from Hello World Component
    </h2>
    `,
    styleUrl:'./hello-world.component.css'
})
export class HelloWorldComponent{
    name:string='My friend';
}