import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arreglo-de-pago',
  templateUrl: './arreglo-de-pago.component.html',
  styleUrls: ['./arreglo-de-pago.component.css']
})
export class ArregloDePagoComponent implements OnInit {

  step: number = 0;

  myForm: FormGroup = this.fb.group({
    nis: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    name: ['',  [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(8)]],
    cellPhoneNumber: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    observations: ['', [Validators.required, Validators.maxLength(500)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  isNumberKey(evt:KeyboardEvent) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true; 
  }

  validField(id:string){
    if(this.myForm.get(id)?.touched){
      return (this.myForm.get(id)?.valid)?'is-valid':'is-invalid';
    }
    return '';
  }

  firstFormValid(){
    return !this.myForm.get('nis')?.invalid && !this.myForm.get('name')?.invalid;
  }

}
