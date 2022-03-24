import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  URL_API = 'http://localhost:3000/bills';

  constructor(private http:HttpClient) { }

  getCollectionBill(nis: string, clientIdType:string, clientId:string):Observable<CustomResponse>{
    console.log(`${this.URL_API}/collection/${nis}/${clientIdType}/${clientId}`)
    return this.http.get<CustomResponse>(`${this.URL_API}/collection/${nis}&${clientIdType}&${clientId}`);
  }

}
