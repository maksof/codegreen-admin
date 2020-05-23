import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyLoginComponent } from './verify-login/verify-login.component';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"doctors",component:DoctorsComponent, canActivate: [AuthGuardService]},
  {path:"patients",component:PatientsComponent, canActivate: [AuthGuardService]},
  {path:"feedbacks",component:FeedbackComponent, canActivate: [AuthGuardService]},
  {path:"change-password",component:ChangePasswordComponent, canActivate: [AuthGuardService]},
  {path:"loading/:token",component:VerifyLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
