import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReporteAveria } from 'src/app/models/reporte-averia';
import { ReporteAveriaService } from 'src/app/services/reporte-averia.service';

@Component({
  selector: 'app-edit-reporte-averia',
  templateUrl: './edit-reporte-averia.component.html',
  styleUrls: ['./edit-reporte-averia.component.css']
})
export class EditReporteAveriaComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private readonly _reporteAveriaService: ReporteAveriaService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  report!: ReporteAveria;

  myForm: FormGroup = this.fb.group({
    provincia: ['', [Validators.required]],
    canton: ['', [Validators.required]],
    distrito: ['', [Validators.required]],
   // address: ['', [Validators.required]],
    nis: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    type: [''],
    state: [],
    creationDate: [''],
    address: ['']
  });

  ngOnInit(): void {
    this.setReportInfo();
  }

  async setReportInfo(){
    let _id = this.route.snapshot.paramMap.get('_id');
    let res = (await this._reporteAveriaService.getReport(_id!).toPromise());
    if(res?.success){
      this.report = res?.data;
      this.fillForm(res?.data);
    }
    else{
      console.log(res?.message);
    }
  }

  fillForm(report: ReporteAveria){
    this.myForm.get('provincia')?.setValue(report.provincia);
    this.myForm.get('canton')?.setValue(report.canton);
    this.myForm.get('distrito')?.setValue(report.distrito);
    this.myForm.get('nis')?.setValue(report.nis);
    this.myForm.get('name')?.setValue(report.name);
    this.myForm.get('lastname')?.setValue(report.lastname);
    this.myForm.get('phoneNumber')?.setValue(report.phoneNumber);
    this.myForm.get('email')?.setValue(report.email);
    this.myForm.get('description')?.setValue(report.description);
    this.myForm.get('type')?.setValue(report.type);
    this.myForm.get('state')?.setValue(report.state);
    this.myForm.get('creationDate')?.setValue(report.creationDate);
    this.myForm.get('address')?.setValue(report.address);
  }

  getImgSource(){
    return `../../../assets/img/${this.report.type}.svg`;
  }

  async updateReport(){
    let res = (await this._reporteAveriaService.updateReport(this.report._id!, this.myForm.get('state')?.value).toPromise());
    if(res?.success){
      this.router.navigate(['/list-reporte-averia']);
      this.toastr.success('Estado actualizado');
    }
    else{
      console.log(res?.message)
      this.toastr.error('No se pudo actualizar');
    }
  }

}
