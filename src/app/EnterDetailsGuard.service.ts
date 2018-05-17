import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable }  from 'rxjs/Rx';

@Injectable()
export class EnterDetailsGuard implements CanActivate {
  constructor(public router:Router){ }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Checking observable");
    if(sessionService.user.isAdmin){
      return true;
    }else{
      this.router.navigate('/auth/login');
    }
    return false;
  }
}
