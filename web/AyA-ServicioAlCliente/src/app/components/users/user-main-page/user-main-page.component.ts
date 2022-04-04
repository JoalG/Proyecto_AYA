import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  constructor(
    private router: Router,
    private readonly _userService: UserService
  ) { }

  userType: Number = 1;

  ngOnInit(): void {
    this.setUserType();
  }

  goToListUsers(){
    this.router.navigate(['/list-users']);
  }

  goToTramitesSolicitudes(){
    this.router.navigate(['/user-tramites-solicitudes']);
  }

  setUserType(){
    this.userType = this._userService.getUserType();
  }
}
