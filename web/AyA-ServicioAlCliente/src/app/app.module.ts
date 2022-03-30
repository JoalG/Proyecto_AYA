import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarFacturacionComponent } from './components/consultar-facturacion/consultar-facturacion.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DetallesFacturacionComponent } from './components/detalles-facturacion/detalles-facturacion.component';
import { ReporteAveriasComponent } from './components/reporte-averias/reporte-averias.component';
import { FormReporteAveriaComponent } from './components/form-reporte-averia/form-reporte-averia.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarFacturacionComponent,
    NavbarComponent,
    SidebarComponent,
    DetallesFacturacionComponent,
    ReporteAveriasComponent,
    FormReporteAveriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
