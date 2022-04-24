import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.css']
})
export class HistorialPagosComponent implements OnInit {

  payments: any;

  constructor(
    private readonly _paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.payments = this._paymentService.get_sharingPayments();
  }

}
