import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private fb: FormBuilder
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

  createUser(){
    console.log(this.myForm)
  }
}
