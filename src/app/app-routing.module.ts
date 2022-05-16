import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
  {path:'login', component:LoginComponent, canActivate:[BeforeLoginService]},
  {path:'signup', component:SignupComponent, canActivate:[BeforeLoginService]},
  {path:'profile', component:ProfileComponent, canActivate:[AfterLoginService]},
  {path:'*', redirectTo:'login',pathMatch:'full'},
  {path:'', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
