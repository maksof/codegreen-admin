import { Injectable } from '@angular/core';
import { AppService } from "src/app/app.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private appService:AppService) { }

  login(obj) {
  	return this.appService.post(`admin/login`,obj);
  }

  logout(){
  	return this.appService.post(`admin/logout`,{});
  }

  changePassword(obj) {
  	return this.appService.post(`admin/changepassword`, obj);
  }

  verifyLogin(){
    return this.appService.post(`admin/verifylogin`, {});
  }

  getAllDoctors(obj){
    return this.appService.post('admin/getAllDoctors', obj);
  }

  getAllFeedbacks(obj){
    return this.appService.post('admin/getAllFeedbacks', obj);
  }

  getAllPatients(obj){
    return this.appService.post('admin/getAllPatients', obj);
  }

  resendVerificationEmail(obj) {
    return this.appService.post(`admin/resendVerificationEmail`,obj);
  }

  approveDoctor(obj) {
    return this.appService.post(`admin/approveDoctor`,obj);
  }

  rejectDoctor(obj) {
    return this.appService.post(`admin/rejectDoctor`,obj);
  }

}
