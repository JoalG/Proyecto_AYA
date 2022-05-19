import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPagosPageRoutingModule } from './consultar-pagos-routing.module';

import { ConsultarPagosPage } from './consultar-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ConsultarPagosPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultarPagosPage]
})
export class ConsultarPagosPageModule {}
