import { Component } from '@angular/core';
 
import { User }    from './user';
 
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class HeroFormComponent {
 
  model = new User(0, 'DR.Skipe', 'mailfake@mail.com', '12345');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newUser() {
    this.model = new User(0, '', '', '');
  }
}