import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  payments!: any;
  nis!: string;
  clientIdType!: string;
  clientId!: string;
  
  constructor(
    private readonly _paymentService: PaymentsService,
    private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
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
      this.presentToast(`El cliente NIS ${this.nis} no tiene pagos realizados.`, "secondary", "information-circle-outline");
    }
  }

  async presentToast(_message: string, _color: string, _icon: string) {
    const toast = await this.toastController.create({
      message: _message,
      color: _color,
      icon: _icon,
      duration: 2000
    });
    toast.present();
  }

}
