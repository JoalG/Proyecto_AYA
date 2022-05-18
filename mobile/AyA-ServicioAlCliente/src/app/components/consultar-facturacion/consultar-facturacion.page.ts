import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';

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
    private fb: FormBuilder,
    private readonly _billService: BillsService,
    private router: Router
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

  async getCollectionBill(){
    let nis = this.myForm.get('nis')?.value;
    let clientIdType = this.myForm.get('clientIdType')?.value;
    let clientId = this.myForm.get('clientId')?.value;
    let bill = (await this._billService.getCollectionBill(nis, clientIdType, clientId).toPromise());
    if(bill!.success==true){
      //this.router.navigate(['/detalles', nis, clientIdType, clientId]);
    }
    else{
     // this.toastr.info("El cliente no tiene facturación al cobro", `NIS ${nis}`)
    }
  }

}
