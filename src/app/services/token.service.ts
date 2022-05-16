import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  handle(data:any){
    this.setToken(data);
    console.log(this.isTokenValid());
  }

  setToken(token:any){
    return localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removeToken(){
    return localStorage.removeItem('token');
  }

  isTokenValid(){
    const token = this.getToken();
    if (token){
      const payload = this.payload(token);
      if (payload){

        return (payload.iss==='http://127.0.0.1:8000/api/login')?true:false;
      }
      
    }
    return false;
  }

  payload(token :any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload:any){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isTokenValid();
  }
}
