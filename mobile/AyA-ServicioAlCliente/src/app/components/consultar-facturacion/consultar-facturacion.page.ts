import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-facturacion',
  templateUrl: './consultar-facturacion.page.html',
  styleUrls: ['./consultar-facturacion.page.scss'],
})
export class ConsultarFacturacionPage implements OnInit {


  myForm: FormGroup = this.fb.group({
    nis: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    clientIdType: ['', [Validators.required]],
    clientId: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

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

}
