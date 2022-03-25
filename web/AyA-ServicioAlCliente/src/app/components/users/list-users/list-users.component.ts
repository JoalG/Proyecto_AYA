import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private readonly _userService: UserService
  ) { }

  users!: any[]

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(){
    let res = (await this._userService.getUsers().toPromise());
    console.log(res)
    if(res?.success){
      console.log(res?.data);
      console.log("HOIILLLALA")
      this.users = res?.data;
    }
    else{
      console.log(res?.message);
    }
  }
  
  getUserTypeText(type: number):string{
    switch (type) {
      case 0:
        return "Super Administrador"
        break;
    
      case 1:
        return "Servicio al cliente"
      default:
        return ""
    }
  }

  goToEditUser(cedula: string){
    console.log("hice click " + cedula)
  }

  deleteUser(cedula: string){
    console.log("hice delete " + cedula)
  }
}
