import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'http://localhost:3000/users';

  constructor(private http:HttpClient, private router: Router) { }
  
  createUser(user:User):Observable<CustomResponse>{
    return this.http.post<CustomResponse>(this.URL_API + '/', user);
  }

  getUsers():Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/');
  }

  getUser(cedula: string):Observable<CustomResponse>{
    return this.http.get<CustomResponse>(this.URL_API + '/' + cedula);
  }

  updateUser(originalCedula: string, user:User):Observable<CustomResponse>{
    return this.http.patch<CustomResponse>(this.URL_API + '/', {'originalCedula': originalCedula, 'user': user});
  }
}
