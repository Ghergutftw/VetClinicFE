import { Injectable } from '@angular/core';
import {HardcodedAuthentificationService} from "./hardcoded-authentification.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(public hardcodedAuthentificationService: HardcodedAuthentificationService,
              public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.hardcodedAuthentificationService.isUserLoggedIn()){
        return true;
      }else {
        this.router.navigate(['login'])
        return false;
      }
    }


}
