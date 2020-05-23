import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { NotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {

  constructor(private api:ApiService, private notificationService:NotificationsService, private router:Router) { }
  showSidebar = true;
  userDetails:any = {};

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('user'));
  }

  logout(){
  	this.api.logout().subscribe(res=>{
  		this.notificationService.success("Success",res.message);
  		localStorage.clear();
  		this.router.navigateByUrl("/");
  	})
  }

  sidenavclose(){
    this.showSidebar = true;
    var element = document.getElementById("sidenavHide");
    var content = document.getElementById("mainContent");
    var top = document.getElementById("top-header");

    if(this.showSidebar){
     element.style.width = "0px";
     content.style.marginLeft="0px";
     top.style.marginLeft="0px";
     top.style.width="100%";     
    }


  }

}
