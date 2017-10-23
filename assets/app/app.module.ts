import { NgModule }				      from '@angular/core';
import { BrowserModule  }	      from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// We need to import the ReactiveFormsModule and import it
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';


import { AppComponent }			from './app.component';
import { NavBarComponent }	from './components/navbar.component';
import { HomeComponent }		from './components/home.component';
import { LoginComponent }   from './components/users/user/user-login.component';
import { UserComponent }    from './components/users/user/user.component';



const appRoutes: Routes = [
  { path: '',         component: HomeComponent  },
  { path: 'home',     component: HomeComponent  },
  { path: 'register', component: UserComponent  },
  { path: 'login',    component: LoginComponent }
];
 
@NgModule({
    declarations:[
    		AppComponent,
        UserComponent,
    		NavBarComponent,
    		HomeComponent,
        LoginComponent
    ],
    imports:[
    		BrowserModule,
    		FormsModule,
        HttpModule,
    		RouterModule.forRoot(appRoutes)
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {}