"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
// import { FormsModule }          from '@angular/forms';
const router_1 = require('@angular/router');
const app_component_1 = require('./app.component');
const register_component_1 = require('./components/register.component');
const navbar_component_1 = require('./components/navbar.component');
const home_component_1 = require('./components/home.component');
const login_component_1 = require('./components/login.component');
const appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            register_component_1.RegisterComponent,
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            // FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        bootstrap: [app_component_1.AppComponent],
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map