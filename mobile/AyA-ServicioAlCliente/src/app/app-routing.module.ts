import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultar-facturacion',
    loadChildren: () => import('./components/consultar-facturacion/consultar-facturacion.module').then( m => m.ConsultarFacturacionPageModule)
  },
  {
    path: 'consultar-pagos',
    loadChildren: () => import('./components/consultar-pagos/consultar-pagos.module').then( m => m.ConsultarPagosPageModule)
  },
  {
    path: '',
    redirectTo: 'consultar-facturacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
