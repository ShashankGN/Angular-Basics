import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router,private jwtHelper:JwtHelperService){

  }

  isUserAuthenticated(){
    let token:string|null=localStorage.getItem("jwt");
    if(token!==null&&!this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }
  logOut(){
    localStorage.removeItem("jwt");
  }

}
