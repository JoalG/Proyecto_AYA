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

@NgModule({
  declarations: [
    AppComponent,
    ConsultarFacturacionComponent,
    NavbarComponent,
    SidebarComponent,
    DetallesFacturacionComponent,
    CreateUserComponent,
    ListUsersComponent,
    EditUserComponent,
    LoginComponent,
    UserMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AuthenticationGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
