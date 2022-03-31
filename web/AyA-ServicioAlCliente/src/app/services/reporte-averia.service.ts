import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReporteAveriaService {

  URL_API = 'http://localhost:3000/users';

  constructor(
    private http:HttpClient, 
    private router: Router
  ) { }
}
