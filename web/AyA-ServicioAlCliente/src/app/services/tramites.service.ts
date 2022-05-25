import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';

@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  URL_API = 'https://server-proyecto-aya.herokuapp.com/tramites';

  constructor(
    private http:HttpClient, 
    private router: Router
  ) { }

  getTramites():Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/');
  }
}
