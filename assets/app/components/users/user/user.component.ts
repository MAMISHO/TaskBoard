import { Component }	from '@angular/core';
import { User }			from '../models/user.model';
// import { Http } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 	'user-form',
  styleUrls: 	['app/components/users/user/user.component.css'],
  templateUrl: 	'app/components/users/user/user.component.html'
})


export class UserComponent {

	// model = new User(0, 'DR.Skipe', 'mailfake@mail.com', '12345');
	model = new User(0, '', '', '', '', '');

	headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

	submitted = false;

	constructor (private http: Http) {};

	onSubmit(){
		// Implementar validaciones con formValidation

		console.log( this.model );
		if (this.model.password === this.model.passconf) {
			this.submitted = true;

		return	this.http.post('/register', JSON.stringify(this.model), this.options)
				.subscribe(	hero  =>  this.extractData(hero),
                     		error =>  console.log(error));
		}
		
	}

	newUser(){
		this.model = new User(0, '', '', '', '', '');
	}

	private extractData(res: Response) {
    	let body = res.json();
    	return body.data || { };
  	}

}