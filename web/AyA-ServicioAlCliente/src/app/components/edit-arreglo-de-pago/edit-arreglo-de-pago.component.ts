import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArregloDePago } from 'src/app/models/arreglo-de-pago';
import { ArreglosDePagosService } from 'src/app/services/arreglos-de-pagos.service';

@Component({
  selector: 'app-edit-arreglo-de-pago',
  templateUrl: './edit-arreglo-de-pago.component.html',
  styleUrls: ['./edit-arreglo-de-pago.component.css']
})
export class EditArregloDePagoComponent implements OnInit {

  arregloDePago!: ArregloDePago;

  myForm: FormGroup = this.fb.group({
    nis: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    name: ['',  [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(8)]],
    cellPhoneNumber: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    observations: ['', [Validators.required, Validators.maxLength(500)]],
    state: ['']
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private readonly _arregloDePagoService: ArreglosDePagosService
  ) { }

  ngOnInit(): void {
    this.setArregloDePagoInfo();
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

  async setArregloDePagoInfo(){
    let _id = this.route.snapshot.paramMap.get('_id');
    let res = (await this._arregloDePagoService.getArregloDePago(_id!).toPromise());
    if(res?.success){
      this.arregloDePago = res?.data;
      this.fillForm(res?.data);
    }
    else{
      console.log(res?.message);
    }
  }

  fillForm(arregloDePago: ArregloDePago){
    this.myForm.get('nis')?.setValue(arregloDePago.nis);
    this.myForm.get('name')?.setValue(arregloDePago.clientName);
    this.myForm.get('phoneNumber')?.setValue(arregloDePago.telephone);
    this.myForm.get('cellPhoneNumber')?.setValue(arregloDePago.cellphone);
    this.myForm.get('email')?.setValue(arregloDePago.email);
    this.myForm.get('observations')?.setValue(arregloDePago.observations);
    this.myForm.get('state')?.setValue(arregloDePago.state);
  }

  async updateArregloDePago(){
    if (this.myForm.valid){
      let state = this.myForm.get('state')?.value;
      let res = (await this._arregloDePagoService.updateArregloDePago(this.arregloDePago._id!, state).toPromise());
      if(res?.success){
        this.router.navigate(['/list-tramites']);
        this.toastr.success('Arreglo de pago actualizado con éxito');
      }
      else{
        this.toastr.error('Arreglo de pago no pudo ser actualizado')
      }
    }
  }

}
