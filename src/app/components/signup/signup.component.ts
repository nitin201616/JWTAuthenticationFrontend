import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public error:any=[];

  constructor(private fb:FormBuilder, private loginSrv:LoginServiceService) { }

  signUpForm = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  })

  get sfv(){return this.signUpForm.controls;}

  ngOnInit(): void {
  }

  loginSubmit(){
    this.loginSrv.signUp(this.signUpForm.value).subscribe(resp => 
      console.log(resp)
    ,
    error => 
      this.handleError(error)
    )
  }

  handleError(error:any){
   this.error = error.error.errors;
  }

}
