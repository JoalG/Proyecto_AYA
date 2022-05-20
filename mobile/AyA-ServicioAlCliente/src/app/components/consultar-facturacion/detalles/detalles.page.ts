import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from 'src/app/services/bills.service';
import { ToastController } from '@ionic/angular';

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
    private router: Router,
    public toastController: ToastController
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
      this.router.navigate(['/consultar-facturacion']);
      this.presentToast(`El cliente NIS ${this.nis} no tiene facturación al cobro.`, "secondary", "information-circle-outline");
    }
  }

  goToHistorialPagos(){
    this.router.navigate(['/consultar-pagos/detalles', this.nis, this.clientIdType, this.clientId]);
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
