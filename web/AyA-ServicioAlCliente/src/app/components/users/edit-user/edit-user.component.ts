import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private readonly _userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  originalCedula!: string|null
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    cedula: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    userType: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.originalCedula = this.route.snapshot.paramMap.get('cedula');
    this.setUserInfo()
  }

  async setUserInfo(){
    let res = (await this._userService.getUser(this.originalCedula!).toPromise());
    if(res?.success){
      this.fillForm(res?.data);
    }
    else{
      console.log(res?.message);
    }
  }

  fillForm(user: User){
    this.myForm.get('name')?.setValue(user.name);
    this.myForm.get('lastname')?.setValue(user.lastname);
    this.myForm.get('email')?.setValue(user.email);
    this.myForm.get('cedula')?.setValue(user.cedula);
    this.myForm.get('userType')?.setValue(user.userType);
  }


  async updateUser(){
    if (this.myForm.valid){
      let user: User = {
        name: this.myForm.value.name,
        lastname: this.myForm.value.lastname,
        email: this.myForm.value.email,
        cedula: this.myForm.value.cedula,
        userType: this.myForm.value.userType,
        password: ''
      }

      let res = (await this._userService.updateUser(this.originalCedula!, user).toPromise());
      if(res?.success){
        this.router.navigate(['/list-users']);
        this.toastr.success('Información de usuario actualizada con exíto');
      }
      else{
        console.log(res?.message)
        this.toastr.error("Información de usuario no pudo ser actualizada");
      }
    }
  }
}
