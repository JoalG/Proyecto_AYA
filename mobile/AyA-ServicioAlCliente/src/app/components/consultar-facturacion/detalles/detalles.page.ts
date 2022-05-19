import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  bill!: any;
  nis!: string;
  clientIdType!: string;
  clientId!: string;

  constructor(
    private readonly _billService: BillsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.nis = this.route.snapshot.paramMap.get('nis');
    this.clientIdType = this.route.snapshot.paramMap.get('clientIdType');
    this.clientId = this.route.snapshot.paramMap.get('clientId');
    this.setBillInfo();
  }

  async setBillInfo(){
    let bill = (await this._billService.getCollectionBill(this.nis!, this.clientIdType!, this.clientId!).toPromise());
    if(bill!.success==true){
      this.bill = bill?.data;
    }
    else{
      //this.router.navigate(['/consultar-facturacion']);
      //this.toastr.info("El cliente no tiene facturación al cobro", `NIS ${this.nis}`);
    }
  }

  goToHistorialPagos(){
    //this.router.navigate(['/historial-pagos', this.nis, this.clientIdType, this.clientId]);
  }

}
