import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private readonly _userService: UserService, private router: Router)
  {

  }

  canActivate() {
    if(this._userService.loggedIn()){
      return true;
    }
    this.router.navigate(['/home'])
    return false;
  }
  
}
