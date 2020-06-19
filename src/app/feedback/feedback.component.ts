import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { CommonService } from "src/app/common.service";
import { NotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";


export interface Doctors {
	fullName: string;
  }

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


	constructor(private api: ApiService, public common: CommonService, private notificationService: NotificationsService, public router: Router) { }

  filterDataBody: any = {
		"pagination": {
			"limit": "10",
			"offset": "0"
		},
		"filter": {
		}
	};
	feedbacks: any = [];
	totalData: any;
	showLoader = false;
	searchDoctors;

	doctors:any = [];
	filteredDoctors:any = [];

	ngOnInit() {
		this.getAllFeedbacks();
		this.getAllDoctors();
	}

	getAllDoctors(){
		this.api.allDoctors().subscribe(res=>{
			this.doctors = res['data'];
			this.filterDoctor({target : {value : ""}});
		})
	}

	filterDoctor(event){
		if(event.target.value == ""){	
			this.clearFilter();
		}
		var filteredDoctors = this.doctors.map(function (doctor) {
			if(doctor.fullName.toLowerCase().indexOf(event.target.value) != -1){
				return doctor;
			}
		});
		
		var newDoctors = [];
		
		filteredDoctors.forEach(row=>{
			if(row != undefined){
				newDoctors.push(row);
			}
		});

		this.filteredDoctors = newDoctors;
	}

	selectedDoctor(event){
		this.filterDataBody.filter.doctorId = event._id;
	}
	
	getAllFeedbacks() {
		this.showLoader = true;
		this.api.getAllFeedbacks(this.filterDataBody).subscribe(res => {
			this.showLoader = false;
			if (res.status == "OK") {
				this.feedbacks = res.data.feedbacks;
				this.totalData = res.data.total;
			} else {
				this.feedbacks = [];
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
		this.getAllFeedbacks();
  }

  clearFilter() {
	this.filterDataBody.filter = {};
	this.searchDoctors = "";
    this.getAllFeedbacks();
  }

  displayDoctors(doctor: Doctors): string {
    return doctor && doctor.fullName ? doctor.fullName : '';
  }

}