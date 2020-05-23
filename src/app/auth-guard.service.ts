import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

	constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
		var token = localStorage.getItem("token");
		if(token) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}
