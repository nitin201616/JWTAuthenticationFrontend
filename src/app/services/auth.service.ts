import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public loggedIn = new BehaviorSubject<boolean>(this.tokenSvc.loggedIn());


changeAuthStatus(value:any){
  console.log('rarararar');
  console.log(value);
  this.loggedIn.next(value);
}

  constructor(private tokenSvc:TokenService) { }
}
