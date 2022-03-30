import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private readonly _userService: UserService, private router: Router)
  {

  }

  canActivate() {
    if(this._userService.loggedIn()){
      // Return true only if super administrador
      if(this._userService.getUserType() == 0){
        return true;
      };
      this.router.navigate(['/user-main-page']);
      return false;
    }
    this.router.navigate(['/consultar-facturacion']);
    return false;
  }
  
}
