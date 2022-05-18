import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarFacturacionPage } from './consultar-facturacion.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarFacturacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarFacturacionPageRoutingModule {}
