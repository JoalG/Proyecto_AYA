import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConsultarFacturacionPageRoutingModule } from './consultar-facturacion-routing.module';

import { ConsultarFacturacionPage } from './consultar-facturacion.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ConsultarFacturacionPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ConsultarFacturacionPage]
})
export class ConsultarFacturacionPageModule {}
