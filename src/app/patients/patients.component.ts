import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { CommonService } from "src/app/common.service";
import { NotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

	constructor(private api: ApiService, public common: CommonService, private notificationService: NotificationsService, public router: Router) { }

  filterDataBody: any = {
		"pagination": {
			"limit": "10",
			"offset": "0"
		},
		"filter": {
		}
	};
	patients: any = [];
	totalData: any;
	showLoader = false;

	ngOnInit() {
		this.getAllPatients();
	}

	getAllPatients() {
		this.showLoader = true;
		this.api.getAllPatients(this.filterDataBody).subscribe(res => {
			this.showLoader = false;
			if (res.status == "OK") {
				this.patients = res.data.patients;
				this.totalData = res.data.total;
			} else {
				this.patients = [];
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
		this.getAllPatients();
  }

  clearFilter() {
    this.filterDataBody.filter = {};
    this.getAllPatients();
  }

}