import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  userType: Number = 1;

  ngOnInit(): void {
    this.setUserType();
  }

  goToListUsers(){
    this.router.navigate(['/list-users']);
  }

  setUserType(){
    const token:any = localStorage.getItem('token');
    if(token !== null){
      const decoded:any = jwtDecode<JwtPayload>(token); // Returns with the JwtPayload typ
      this.userType = decoded.userType;
      console.log(decoded)
    }
  }
}
