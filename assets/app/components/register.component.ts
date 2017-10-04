import { Component }    from '@angular/core';
import { AppComponent } from '../app.component';
import { User }         from './user';

@Component({
    selector: 'div-register',
    templateUrl: "app/templates/register.template.html",
})
export class RegisterComponent{
 
  model = new User(0, 'DR.Skipe', 'mailfake@mail.com', '12345');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newUser() {
    this.model = new User(0, '', '', '');
  }

}