import { NgModule }				      from '@angular/core';
import { BrowserModule  }	      from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// We need to import the ReactiveFormsModule and import it
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';


import { AppComponent }			from './app.component';
import { RegisterComponent}	from './components/register.component';
import { NavBarComponent }	from './components/navbar.component';
import { HomeComponent }		from './components/home.component';
import { LoginComponent }   from './components/login.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
 
@NgModule({
    declarations:[
    		AppComponent,
    		RegisterComponent,
    		NavBarComponent,
    		HomeComponent,
        LoginComponent
    ],
    imports:[
    		BrowserModule,
    		FormsModule,
    		RouterModule.forRoot(appRoutes)
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {}