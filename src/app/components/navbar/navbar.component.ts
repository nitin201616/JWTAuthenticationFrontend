import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn=false;
  constructor(private authSvc:AuthService, private route:Router, private tokenSvc:TokenService) { }

  ngOnInit(): void {
    this.authSvc.loggedIn.subscribe(loggedInStatus => {
      this.loggedIn = loggedInStatus;
      console.log(this.loggedIn);
    })
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.tokenSvc.removeToken();
    this.authSvc.changeAuthStatus(false);
    this.route.navigateByUrl('/login');
  }

  

}
