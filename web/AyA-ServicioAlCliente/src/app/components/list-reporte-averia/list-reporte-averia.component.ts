import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteAveriaService } from 'src/app/services/reporte-averia.service';

@Component({
  selector: 'app-list-reporte-averia',
  templateUrl: './list-reporte-averia.component.html',
  styleUrls: ['./list-reporte-averia.component.css']
})
export class ListReporteAveriaComponent implements OnInit {

  constructor(
    private readonly _reporteAveriaService: ReporteAveriaService,
    private router: Router
  ) { }

  reports!: any;

  ngOnInit(): void {
    this.getReports();
  }

  async getReports(){
    let res = (await this._reporteAveriaService.getReports().toPromise());
    if(res?.success){
      this.reports = res?.data;
    }
    else{
      console.log(res?.message);
    }
  }

  getReportState(type: number):string{
    switch (type) {
      case 0:
        return "Pendiente"
      case 1:
        return "En revisión"
      case 2:
        return "Solucionado"
      default:
        return ""
    }
  }

  goToEditReport(_id: string){
    this.router.navigate(['/']);
  }
}
