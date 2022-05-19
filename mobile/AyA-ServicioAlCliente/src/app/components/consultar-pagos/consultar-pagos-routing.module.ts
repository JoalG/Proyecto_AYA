import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPagosPage } from './consultar-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPagosPageRoutingModule {}
