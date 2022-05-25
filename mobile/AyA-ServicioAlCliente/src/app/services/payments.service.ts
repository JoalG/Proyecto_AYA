import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  
  URL_API = 'https://server-proyecto-aya.herokuapp.com/payments';
  private sharingPayments: any;

  constructor(
    private http:HttpClient, 
    private router: Router
  ) { }

  getPayments(nis: string, clientIdType: string, clientId: string):Observable<CustomResponse>{
    return this.http.get<CustomResponse>(`${this.URL_API}/${nis}&${clientIdType}&${clientId}`);
  }

  get_sharingPayments() {
    return this.sharingPayments;
  }

  set_sharingPayments(obj: any) {
    this.sharingPayments = obj;
  }
}
