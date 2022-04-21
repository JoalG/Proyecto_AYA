import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';
import { Suspension } from '../models/suspension';

@Injectable({
  providedIn: 'root'
})
export class SuspensionService {

  URL_API = 'http://localhost:3000/suspensions';

  constructor(
    private http:HttpClient, 
    private router: Router
  ) { }

  createSuspension(suspension: Suspension):Observable<CustomResponse>{
    return this.http.post<CustomResponse>(this.URL_API + '/', suspension);
  }

  getSuspensionsClients(provincia: string, canton: string):Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + `/?provincia=${provincia}&canton=${canton}`);
  }

  getSuspensions():Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/');
  }

  updateSuspension(suspension: Suspension):Observable<CustomResponse>{
    return this.http.patch<CustomResponse>(this.URL_API + '/', suspension);
  }

  deleteSuspension(_id: string):Observable<CustomResponse>{
    return this.http.patch<CustomResponse>(this.URL_API + '/', {'_id': _id});
  }
}
