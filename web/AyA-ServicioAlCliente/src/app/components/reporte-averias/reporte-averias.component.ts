import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-averias',
  templateUrl: './reporte-averias.component.html',
  styleUrls: ['./reporte-averias.component.css']
})
export class ReporteAveriasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToReportarAveria(type:string){
    this.router.navigate(["/edit-reporte-averia",type])
  }

}
