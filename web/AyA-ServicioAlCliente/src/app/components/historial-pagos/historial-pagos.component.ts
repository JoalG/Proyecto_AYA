import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.css']
})
export class HistorialPagosComponent implements OnInit {

  payments: any;
  nis!: string|null;
  clientIdType!: string|null;
  clientId!: string|null;

  constructor(
    private readonly _paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.nis = this.route.snapshot.paramMap.get('nis');
    this.clientIdType = this.route.snapshot.paramMap.get('clientIdType');
    this.clientId = this.route.snapshot.paramMap.get('clientId');
    this.setPaymentsInfo();
  }

  async setPaymentsInfo() {
    let res = (await this._paymentService.getPayments(this.nis!, this.clientIdType!, this.clientId!).toPromise());
    if(res?.success){
      this.payments = res?.data;
    }
    else{
      this.router.navigate(['/consultar-pagos']);
      this.toastr.info("El cliente no tiene pagos realizados", `NIS ${this.nis}`);
    }
  }
}
