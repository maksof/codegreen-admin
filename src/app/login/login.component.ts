import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { CommonService } from "../common.service";
import { ApiService } from "src/app/api.service";
import { NotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private common:CommonService, private api:ApiService, private notificationService:NotificationsService, private router:Router) { }

  userData:any = {};
  showLoader = false;

  	ngOnInit() {
		this.checkIfUserSessionExist();
  	}

  	checkIfUserSessionExist() {
		var token = localStorage.getItem('token');
		if(token) this.router.navigateByUrl(`/loading/${token}`);
  	}

	login(){
		var cv = this.common.checkValue;
		if(cv(this.userData.email) && cv(this.userData.password)) {
			(<HTMLInputElement> document.getElementById("disable")).disabled = true;
			(<HTMLInputElement> document.getElementById("disablePassword")).disabled = true;
			this.showLoader = true;
			this.api.login(this.userData).subscribe(loginResponse=>{
				if(loginResponse.status == "OK"){
					localStorage.setItem("token",(loginResponse.data.token));
					(<HTMLInputElement> document.getElementById("disable")).disabled = false;
					(<HTMLInputElement> document.getElementById("disablePassword")).disabled = false;
					this.showLoader = false;
					this.router.navigateByUrl(`/loading/${loginResponse.data}`);
				} else {
					this.notificationService.error("Invalid",loginResponse.message);
					(<HTMLInputElement> document.getElementById("disable")).disabled = false;
					(<HTMLInputElement> document.getElementById("disablePassword")).disabled = false;
					this.showLoader = false;
				}
			}, (err)=>{
				this.showLoader = false;
				this.notificationService.error("Error","Internal server error, Please try again later!")
			})
		} else {
			this.notificationService.error("Error","Please fill all the required fields!");
		}
	}

}