import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomResponse } from '../models/custom-response.model';
import { User } from '../models/user';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'https://server-proyecto-aya.herokuapp.com/users';
  private username: string = '';

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

  deleteUser(cedula: string):Observable<CustomResponse>{
    return this.http.patch<CustomResponse>(this.URL_API + '/delete', {'cedula': cedula});
  }

  login(email: string, password: string):Observable<CustomResponse> {
    return this.http.post<CustomResponse>(this.URL_API + '/login', {'email': email, 'password': password});
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserType(){
    const token:any = localStorage.getItem('token');
    if(token !== null){
      const decoded:any = jwtDecode<JwtPayload>(token); // Returns with the JwtPayload typ
      return decoded.userType;
    }
    return null
  }

  getUsername(){
    if(this.username==''){
      let tokenInfo: any = jwtDecode(this.getToken()!);
      this.username = tokenInfo.name + ' ' + tokenInfo.lastname;
    }
    return this.username;
  }
}
