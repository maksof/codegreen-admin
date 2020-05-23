import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }
  showSidebar = true;
  mobilesidebar = true;

  ngOnInit() {
    this.togleMobmenu();
    this.toglesmmenu();
  }

  togleMobmenu(){
    this.showSidebar = !this.showSidebar;
    var element = document.getElementById("sidenavHide");
    var content = document.getElementById("mainContent");
    var top = document.getElementById("top-header");
    
    if(this.showSidebar) {
      document.getElementById("sidenavHide").style.width = "0px";
      document.getElementById("mainContent").style.marginLeft = "0px";
      document.getElementById("top-header").style.marginLeft = "0px";
      document.getElementById("top-header").style.width = "100%";
      document.getElementById("mainContent").style.width = "100%";
      element.className += " slidenav";
      content.className += " content";
      top.className += " top-header";
    } else {
      document.getElementById("sidenavHide").style.width = "230px";
      document.getElementById("mainContent").style.marginLeft = "230px";
      document.getElementById("mainContent").style.width="calc(100% - 230px)";
      document.getElementById("top-header").style.marginLeft = "230px";
      element.classList.remove("slidenav");
      content.classList.remove("content");
      top.classList.remove("top-header");
    }
  }

  toglesmmenu(){
    var element = document.getElementById("sidenavHide");
    if(!this.mobilesidebar){
      document.getElementById("sidenavHide").style.width = "0px";
      element.className += " slidenav";
    }
    else
    {
      document.getElementById("sidenavHide").style.width = "230px";
      element.className += " slidenav";
    }
  }

}
