import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:any= null;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  get f(){return this.loginForm.controls;}
  constructor(private loginSrv:LoginServiceService, private tokenSrv:TokenService,
    private authServ:AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    console.log(this.loginForm.value);
    this.loginSrv.login(this.loginForm.value).subscribe(data => 
      this.handleResponse(data),
      error => this.handleError(error))
  }

  handleError(error: any){
    this.error = error.error.error;
  }

  handleResponse(data:any){
    console.log(data.access_token);
    this.tokenSrv.handle(data.access_token);
    this.authServ.changeAuthStatus(true);
    this.route.navigateByUrl('/profile');
  }

}
