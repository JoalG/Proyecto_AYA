import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  URL_API = 'https://server-proyecto-aya.herokuapp.com/bills';
  private sharingBill: any;

  constructor(private http:HttpClient) { }

  getCollectionBill(nis: string, clientIdType:string, clientId:string):Observable<CustomResponse>{
    return this.http.get<CustomResponse>(`${this.URL_API}/collection/${nis}&${clientIdType}&${clientId}`);
  }

  get_sharingBill() {
    return this.sharingBill;
  }

  set_sharingBill(obj: any) {
    this.sharingBill = obj;
  }



}
