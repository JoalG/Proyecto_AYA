import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tramites-solicitudes',
  templateUrl: './user-tramites-solicitudes.component.html',
  styleUrls: ['./user-tramites-solicitudes.component.css']
})
export class UserTramitesSolicitudesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTramitesSolicitudes(){
    this.router.navigate(['/list-tramites']);
  }

  goToReportes(){
    this.router.navigate(['/list-reporte-averia']);
  }

}
