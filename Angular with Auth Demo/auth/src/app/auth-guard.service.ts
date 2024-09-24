import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private jwtHelper:JwtHelperService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token=localStorage.getItem("jwt");
    if(token&&!this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }

  // canActivate() {
  //   const token=localStorage.getItem("jwt");
  //   if(token&&!this.jwtHelper.isTokenExpired(token)){
  //     return true;
  //   }
  //   this.router.navigate(["login"]);
  //   return false;
  // }
}
