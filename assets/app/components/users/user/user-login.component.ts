import { Component }	from '@angular/core';
import { AppComponent } from '../../../app.component';
import { User }			from '../models/user.model';

@Component({
	selector: 	  'user-login',
	styleUrls: 	  ['app/components/users/user/user.component.css'],
 	templateUrl:  'app/templates/login.template.html',
})
export class LoginComponent {

	model = new User(0, '', '', '', '', '');
}