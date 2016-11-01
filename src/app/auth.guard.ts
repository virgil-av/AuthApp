import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {Auth} from "./services/auth.service";


@Injectable()

export class AuthGuard implements CanActivate{
  constructor(
    private auth: Auth,
    private router: Router
  ){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.authenticated()){
      console.log('AUTH GUARD PASSED');
      return true;
    }else{
      console.log('BLOCKED BY AUTHGUARD');
      this.router.navigate(['/']);
      return false;
    }


   }


}
