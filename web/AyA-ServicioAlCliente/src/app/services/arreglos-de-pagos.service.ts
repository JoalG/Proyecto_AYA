import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArregloDePago } from '../models/arreglo-de-pago';
import { CustomResponse } from '../models/custom-response.model';

@Injectable({
  providedIn: 'root'
})
export class ArreglosDePagosService {

  URL_API = 'http://localhost:3000/arregloDePago';

  constructor(
    private http:HttpClient, 
    private router: Router
  ) { }

  createArregloDePago(arregloDePago: ArregloDePago):Observable<CustomResponse>{
    return this.http.post<CustomResponse>(this.URL_API + '/', arregloDePago);
  }

  getArregloDePago(_id: string):Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/' + _id);
  }

  updateReport(_id: string, state: string):Observable<CustomResponse>{
    return this.http.patch<CustomResponse>(this.URL_API + '/', {'_id': _id, 'state': state});
  }
}
