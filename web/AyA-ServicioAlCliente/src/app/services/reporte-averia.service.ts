import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteAveria } from '../models/reporte-averia';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteAveriaService {

  URL_API = 'http://localhost:3000/reportesAverias';

  constructor(
    private http:HttpClient, 
    private router: Router
  ) { }

  createReport(report: ReporteAveria):Observable<CustomResponse>{
    return this.http.post<CustomResponse>(this.URL_API + '/', report);
  }

  getReports():Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/');
  }

  getReport(_id: string):Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/' + _id);
  }

  updateReport(_id: string, state: number):Observable<CustomResponse>{
    return this.http.patch<CustomResponse>(this.URL_API + '/', {'_id': _id, 'state': state});
  }
}
