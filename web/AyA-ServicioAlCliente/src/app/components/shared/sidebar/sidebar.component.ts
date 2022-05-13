import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private readonly _userService: UserService
  ) { }

  ngOnInit(): void {
  }

  goToUsers(){
    let loggedIn = this._userService.loggedIn()
    if(loggedIn){
      this.router.navigate(['/user-main-page']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
