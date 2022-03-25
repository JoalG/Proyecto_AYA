import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-detalles-facturacion',
  templateUrl: './detalles-facturacion.component.html',
  styleUrls: ['./detalles-facturacion.component.css']
})
export class DetallesFacturacionComponent implements OnInit {

  bill:any;

  constructor(
    private readonly _billService: BillsService
  ) { }

  ngOnInit(): void {
    this.bill = this._billService.get_sharingBill();
  }

}
