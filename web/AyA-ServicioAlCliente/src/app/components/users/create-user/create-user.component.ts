import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly _userService: UserService
  ) { }

  myForm!: FormGroup; 

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      userType: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  isNumberKey(evt:KeyboardEvent) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
    
  }

  async createUser(){
    if (this.myForm.valid){
      let user: User = {
        name: this.myForm.value.name,
        lastname: this.myForm.value.lastname,
        email: this.myForm.value.email,
        cedula: this.myForm.value.cedula,
        userType: this.myForm.value.userType,
        password: this.myForm.value.password
      }

      let res = (await this._userService.createUser(user).toPromise());
      if(res?.success){
        console.log("USUARIO CREADO")
      }
      else{
        console.log("ERROR. USUARIO NO CREADO")
      }
    }
  }
}
