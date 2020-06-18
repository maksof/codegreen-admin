import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {FormsModule} from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



// services
import { AppService } from "./app.service";
import { CommonService } from "./common.service";
import { ApiService } from "./api.service";
import { VerifyLoginComponent } from './verify-login/verify-login.component';
import { OnlyNumber } from './number.directive';
import { FacebookModule } from 'ngx-facebook';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SendEmailComponent } from './send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    FooterComponent,
    LoginComponent,
    ChangePasswordComponent,
    VerifyLoginComponent,
    OnlyNumber,
    DoctorsComponent,
    PatientsComponent,
    FeedbackComponent,
    SendEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    ChartsModule,
    NgxSkeletonLoaderModule,
    MatTooltipModule,
    AngularEditorModule,
    SimpleNotificationsModule.forRoot(),
    NgCircleProgressModule.forRoot(),
    FacebookModule.forRoot(),
    NgxMaterialTimepickerModule,
    ScrollToModule.forRoot()
  ],
  providers: [AppService, ApiService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
