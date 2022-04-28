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
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationGuard } from './authentication.guard';
import { UserMainPageComponent } from './components/users/user-main-page/user-main-page.component';
import { RoleGuard } from './role.guard';
import { ReporteAveriasComponent } from './components/reporte-averias/reporte-averias.component';
import { FormReporteAveriaComponent } from './components/form-reporte-averia/form-reporte-averia.component';
import { ListReporteAveriaComponent } from './components/list-reporte-averia/list-reporte-averia.component';
import { EditReporteAveriaComponent } from './components/edit-reporte-averia/edit-reporte-averia.component';
import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
} from '@costlydeveloper/ngx-awesome-popup';
import { UserTramitesSolicitudesComponent } from './components/users/user-tramites-solicitudes/user-tramites-solicitudes.component';
import { TramitesProyectosComponent } from './components/tramites-proyectos/tramites-proyectos.component';
import { SuspensionesDelServicioComponent } from './components/suspensiones-del-servicio/suspensiones-del-servicio.component';
import { ListSuspensionsComponent } from './components/suspensions/list-suspensions/list-suspensions.component';
import { CreateSuspensionComponent } from './components/suspensions/create-suspension/create-suspension.component';
import { DetallesSuspensionComponent } from './components/detalles-suspension/detalles-suspension.component';
import { TramitesYSolicitudesComponent } from './components/tramites-y-solicitudes/tramites-y-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarFacturacionComponent,
    NavbarComponent,
    SidebarComponent,
    CreateUserComponent,
    ListUsersComponent,
    EditUserComponent,
    LoginComponent,
    UserMainPageComponent,
    DetallesFacturacionComponent,
    ReporteAveriasComponent,
    FormReporteAveriaComponent,
    ListReporteAveriaComponent,
    EditReporteAveriaComponent,
    UserTramitesSolicitudesComponent,
    ListSuspensionsComponent,
    CreateSuspensionComponent,
    UserTramitesSolicitudesComponent,
    TramitesProyectosComponent,
    SuspensionesDelServicioComponent,
    DetallesSuspensionComponent,
    TramitesYSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxAwesomePopupModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
    DialogConfigModule.forRoot(), // optional
    ToastNotificationConfigModule.forRoot(),
  ],
  providers: [
    AuthenticationGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
