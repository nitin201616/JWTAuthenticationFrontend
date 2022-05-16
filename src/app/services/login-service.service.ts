import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
url = 'http://127.0.0.1:8000/api/signup';
loginUrl =  'http://127.0.0.1:8000/api/login';
  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post(this.url,data);
  }

  login(data:any){
    return this.http.post(this.loginUrl,data);
  }
}
