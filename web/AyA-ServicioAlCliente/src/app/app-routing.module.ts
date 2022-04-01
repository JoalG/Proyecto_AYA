import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ConsultarFacturacionComponent } from './components/consultar-facturacion/consultar-facturacion.component';
import { DetallesFacturacionComponent } from './components/detalles-facturacion/detalles-facturacion.component';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { UserMainPageComponent } from './components/users/user-main-page/user-main-page.component';
import { RoleGuard } from './role.guard';
import { FormReporteAveriaComponent } from './components/form-reporte-averia/form-reporte-averia.component';
import { ReporteAveriasComponent } from './components/reporte-averias/reporte-averias.component';
import { ListReporteAveriaComponent } from './components/list-reporte-averia/list-reporte-averia.component';
import { EditReporteAveriaComponent } from './components/edit-reporte-averia/edit-reporte-averia.component';

const routes: Routes = [
  
  {path:'consultar-facturacion', component:ConsultarFacturacionComponent},
  {path:'detalles-facturacion', component:DetallesFacturacionComponent},
  {path:'reporte-averias', component:ReporteAveriasComponent},
  {path:'reportar-averia/:type', component:FormReporteAveriaComponent},
  {
    path:'create-user', 
    component:CreateUserComponent,
    canActivate: [RoleGuard]
  },
  {
    path:'list-users', 
    component:ListUsersComponent,
    canActivate: [RoleGuard]
  },
  {
    path:'edit-user/:cedula', 
    component:EditUserComponent,
    canActivate: [RoleGuard]
  },
  {path:'login', component:LoginComponent},
  {
    path:'user-main-page', 
    component:UserMainPageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'list-reporte-averia',
    component: ListReporteAveriaComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'edit-reporte-averia/:_id',
    component: EditReporteAveriaComponent,
    canActivate: [AuthenticationGuard]
  },
  {path:'**',pathMatch:'full',redirectTo:'consultar-facturacion'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
