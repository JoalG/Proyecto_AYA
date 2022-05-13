import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
  ConfirmBoxEvokeService
} from '@costlydeveloper/ngx-awesome-popup';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private readonly _userService: UserService,
    private router: Router,
    private confirmBoxEvokeService: ConfirmBoxEvokeService,
    private toastr: ToastrService
  ) { }

  users!: any[]
  idToDelete!: string;


  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(){
    let res = (await this._userService.getUsers().toPromise());
    if(res?.success){
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
    this.router.navigate(['/edit-user', cedula]);
  }

  goToCreateUser(){
    this.router.navigate(['/create-user']);
  }

  setIdToDelte(cedula: string){
    this.idToDelete=cedula;
  }
  
  confirmDeleteBox() {
    this.deleteUser(this.idToDelete);
  }


  async deleteUser(cedula: string){
    let res = (await this._userService.deleteUser(cedula).toPromise());
    if(res?.success){
      this.getUsers();
      this.toastr.success("Usuario eliminado con éxito");
    }
    else{
      this.toastr.error("Usuario no pudo ser eliminado");
    }
  }
}
