import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  BACK_URL = environment.apiUrl;

  constructor(private http:HttpClient) {}

  register(data:any) {
    return this.http.post<any>(this.BACK_URL+"/api/v1/register", data, {
      headers : new HttpHeaders().set('content-type', 'application/json')
    }).subscribe();
  }

  login(data:any) {
    return this.http.post<any>(this.BACK_URL+"/api/v1/authenticate", data, {
      headers : new HttpHeaders().set('content-type', 'application/json')
    }).subscribe();
  }
}
