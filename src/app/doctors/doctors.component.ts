import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { CommonService } from "src/app/common.service";
import { NotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

	constructor(private api: ApiService, public common: CommonService, private notificationService: NotificationsService, public router: Router) { }

  filterDataBody: any = {
		"pagination": {
			"limit": "10",
			"offset": "0"
		},
		"filter": {
		}
	};
	doctors: any = [];
	totalData: any;
	showLoader = false;

	ngOnInit() {
		this.getAllDoctors();
	}

	getAllDoctors() {
		this.showLoader = true;
		this.api.getAllDoctors(this.filterDataBody).subscribe(res => {
			this.showLoader = false;
			if (res.status == "OK") {
				this.doctors = res.data.doctors;
				this.totalData = res.data.total;
			} else {
				this.doctors = [];
				this.totalData = 0;
			}
		}, (err) => {
			this.notificationService.error("Error", "Internal server error, Please try again later!");
			this.showLoader = false;
		})
	}

	setPage(event) {
		this.filterDataBody.pagination.limit = (event) ? event.pageSize : 5;
		this.filterDataBody.pagination.offset = (event) ? event.pageSize * event.pageIndex : 0;
		this.getAllDoctors();
  }
  
  approveDoctor(doctorId, index) {
    this.showLoader = true;
		this.api.approveDoctor({"userId": doctorId}).subscribe(res => {
			this.showLoader = false;
			if (res.status == "OK") {
        this.notificationService.success('Success', res.message);
        this.doctors[index].isApproved = true;
			} else {
				this.notificationService.error('Error', res.message);
			}
		}, (err) => {
			this.notificationService.error("Error", "Internal server error, Please try again later!");
			this.showLoader = false;
		})
  }

  rejectDoctor(doctorId, index) {
    this.showLoader = true;
		this.api.rejectDoctor({"userId": doctorId}).subscribe(res => {
			this.showLoader = false;
			if (res.status == "OK") {
        this.notificationService.success('Success', res.message);
        this.doctors[index].isBlocked = true;
			} else {
				this.notificationService.error('Error', res.message);
			}
		}, (err) => {
			this.notificationService.error("Error", "Internal server error, Please try again later!");
			this.showLoader = false;
		})
  }

  resendEmail(doctorId) {
    this.showLoader = true;
		this.api.resendVerificationEmail({"doctorId": doctorId}).subscribe(res => {
			this.showLoader = false;
			if (res.status == "OK") {
        this.notificationService.success('Success', res.message);
			} else {
        this.notificationService.error('Error', res.message);
			}
		}, (err) => {
			this.notificationService.error("Error", "Internal server error, Please try again later!");
			this.showLoader = false;
		})
  }

  clearFilter() {
    this.filterDataBody.filter = {};
    this.getAllDoctors();
  }

}