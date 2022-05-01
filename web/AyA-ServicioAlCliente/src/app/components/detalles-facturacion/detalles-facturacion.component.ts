import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-detalles-facturacion',
  templateUrl: './detalles-facturacion.component.html',
  styleUrls: ['./detalles-facturacion.component.css']
})
export class DetallesFacturacionComponent implements OnInit {

  bill:any;
  nis!: string|null;
  clientIdType!: string|null;
  clientId!: string|null;

  constructor(
    private readonly _billService: BillsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.nis = this.route.snapshot.paramMap.get('nis');
    this.clientIdType = this.route.snapshot.paramMap.get('clientIdType');
    this.clientId = this.route.snapshot.paramMap.get('clientId');
    this.setBillInfo();
  }

  async setBillInfo(){
    let bill = (await this._billService.getCollectionBill(this.nis!, this.clientIdType!, this.clientId!).toPromise());
    console.log(bill)
    if(bill!.success==true){
      this.bill = bill?.data;
    }
    else{
      this.toastr.info("El cliente no tiene facturación al cobro", `NIS ${this.nis}`);
    }
  }

  goToHistorialPagos(){
    this.router.navigate(['/historial-pagos', this.nis, this.clientIdType, this.clientId]);
  }
}
