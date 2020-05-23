import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, Inject} from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(Http) private http:Http) { }

  baseUrl = environment.userApi;
  auth:any;

  setToken(){
    this.auth = localStorage.getItem("token");
  }

  get(url) {
    this.setToken();
    var headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth });
    var options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl+url,options).pipe(map((res: any) => {
      return res.json();
    }));
  }

  post(url,data){
    this.setToken();
    var headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth });
    var options = new RequestOptions({ headers: headers });

  	return this.http.post(this.baseUrl+url,data,options).pipe(map((res: any) => {
      return res.json();
    }));
  }

  uploadCloudinaryImage(url,formData) {
    return this.http.post(this.baseUrl+url, formData)
        .pipe(map((res: Response) => {
            var postRes = res.json();
            return postRes;
        }));
  }

  uploadCloudinaryBase64Image(formData) {
    return this.http.post(environment.cloudinaryBase64Ulr, formData)
      .pipe(map((res: Response) => {
          var postRes = res.json();
          return postRes;
      }));
  }


}
