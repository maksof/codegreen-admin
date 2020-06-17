import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NotificationsService } from 'angular2-notifications';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  constructor(public commonService:CommonService, private notification:NotificationsService, private apiService:ApiService) { }

  sendEmail:any = {};
  showLoader = false;

  ngOnInit() {
  }

  send(){
    var cv = this.commonService.checkValue;
    if(cv(this.sendEmail.email) && cv(this.sendEmail.msg) && cv(this.sendEmail.subject)){
      this.showLoader = true;
      this.apiService.sendEmail(this.sendEmail).subscribe(res=>{
        this.showLoader = false;
        if(res.status == "OK"){
          this.sendEmail = {};
          this.notification.success("Congratulations",res.message);
        } else {
          this.notification.error("Error",res.message);
        }
      }, (err)=>{
        this.showLoader = false;
        this.notification.error("Error","Internal server error, Please try again later");
      });
    } else {
      this.notification.error("Error","Please fill all the required fields");
    }
  }

}
