import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly _userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  async login(){
    let res = (await this._userService.login(this.myForm.get('email')?.value, this.myForm.get('password')?.value).toPromise());
    if(res?.success){
      console.log(res?.message);
      localStorage.setItem('token', res.data);
      this.toastr.success("Bienvenido","Sesión iniciada con éxito");
    }
    else{
      console.log(res?.message);
      this.toastr.error("Datos Incorrectos","No se pudo inciar sesión")
    }
  }
}
