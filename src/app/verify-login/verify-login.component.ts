import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { Router } from "@angular/router";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-verify-login',
  templateUrl: './verify-login.component.html',
  styleUrls: ['./verify-login.component.scss']
})
export class VerifyLoginComponent implements OnInit {

  constructor(private api:ApiService, private router:Router, private notificationService:NotificationsService) { }

  showLoader = false;
  verifySuccess = false;

  ngOnInit() {
    this.showLoader = true;
  	this.api.verifyLogin().subscribe(res=>{
  		if(res.status == "OK"){
        localStorage.setItem("user",JSON.stringify(res.data));
        this.verifySuccess = true;
        this.router.navigateByUrl(`/doctors`);
  		} else {
  			this.notificationService.error("Error","Your session is expired, Please login again!");
  			localStorage.clear();
        this.router.navigateByUrl("");
  		}
  	},(err)=>{
      this.notificationService.error("Error","Internal server error! Please try again later");
      localStorage.clear();
      this.router.navigateByUrl("");
    })
  }

}
