import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-facturacion',
  templateUrl: './consultar-facturacion.component.html',
  styleUrls: ['./consultar-facturacion.component.css']
})
export class ConsultarFacturacionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    nisNumber: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    idType: ['', [Validators.required]],
    idNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
  });

  isNumberKey(evt:KeyboardEvent) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
    
  }

}
