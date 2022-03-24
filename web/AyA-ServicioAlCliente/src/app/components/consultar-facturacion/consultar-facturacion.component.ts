import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { identity } from 'rxjs';
import { CustomResponse } from 'src/app/models/custom-response.model';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-consultar-facturacion',
  templateUrl: './consultar-facturacion.component.html',
  styleUrls: ['./consultar-facturacion.component.css']
})
export class ConsultarFacturacionComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly _billService: BillsService
    ) { }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    nis: ['3011939', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    clientIdType: ['Cédula de identidad', [Validators.required]],
    clientId: ['123213231', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
  });

  isNumberKey(evt:KeyboardEvent) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
    
  }

  async getCollectionBill(){
    let nis = this.myForm.get('nis')?.value;
    let clientIdType = this.myForm.get('clientIdType')?.value;
    let clientId = this.myForm.get('clientId')?.value;
    let bill = (await this._billService.getCollectionBill(nis, clientIdType, clientId).toPromise());
    if(bill!.success){
      console.log(bill?.data)
    }
    else{
      console.log(bill?.message)
    }
  }

}
