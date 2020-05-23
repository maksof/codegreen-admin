import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CommonService } from 'src/app/common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

	constructor(private api:ApiService, private common:CommonService, private notificationService:NotificationsService, private router:Router) { }

	passwordData:any = {};
	showLoader = false;

	ngOnInit() {
	}

	changePassword() {
		var cv = this.common.checkValue;
		var tempObj = {
			oldPassword : this.passwordData.oldPassword,
			newPassword : this.passwordData.newPassword
		}
		if(cv(this.passwordData.oldPassword)) {
			if(cv(this.passwordData.newPassword) && cv(this.passwordData.confirmPassword)){
				if(this.confirmPassword()){
					this.showLoader = true;
					this.api.changePassword(tempObj).subscribe(res=>{
						if(res.status == "OK"){
							this.passwordData = {};
							this.notificationService.success("Success","Your password is updated successfully.");
							this.showLoader = false;
						} else {
							if(res.message == "token not found") {
							  this.notificationService.info("Info","Your session is expired, Please login again!");
							  this.router.navigateByUrl("/login");
							} else {
								this.notificationService.error("Error",res.message);
							}
						  }
					}, (err)=>{
						this.notificationService.error("Error","Internal server error, please try again later..");
						this.showLoader = false;
					})
				} else {
					this.notificationService.error("Error","Password not match")
				}
			} else this.notificationService.error("Error","Please fill all the required fields!")
		} else {
			this.notificationService.error("Error","Please enter the password!")
		}
	}

	confirmPassword(){
		if(this.passwordData.newPassword === this.passwordData.confirmPassword) {
			return true;
		} else {
			return false;
		}
	}

}
