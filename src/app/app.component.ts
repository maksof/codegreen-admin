import { Component } from '@angular/core';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edinn-admin';

  	public options = {
		position: ["bottom", "left"],
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true,
		clickIconToClose: true,
		lastOnBottom: true,
		timeOut: 3000,
	}
}
