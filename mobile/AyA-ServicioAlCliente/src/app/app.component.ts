import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/consultar-facturacion'},
    { title: 'Consulta de facturación', url: '/consultar-facturacion'},
    { title: 'Historial de pagos', url: '/consultar-pagos'},
    { title: 'Reporte de averías', url: ''},
    { title: 'Trámites y solicitudes', url: ''},
    { title: 'Sucursal más cercana', url: ''},
    { title: 'Próximas supensiones de servicio', url: ''},
  ];

  constructor() {}
}
