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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const user_model_1 = require("../models/user.model");
// import { Http } from '@angular/http';
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
let UserComponent = class UserComponent {
    constructor(http) {
        this.http = http;
        // model = new User(0, 'DR.Skipe', 'mailfake@mail.com', '12345');
        this.model = new user_model_1.User(0, '', '', '', '', '');
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_2.RequestOptions({ headers: this.headers });
        this.submitted = false;
    }
    ;
    onSubmit() {
        // Implementar validaciones con formValidation
        console.log(this.model);
        if (this.model.password === this.model.passconf) {
            this.submitted = true;
            return this.http.post('/register', JSON.stringify(this.model), this.options)
                .subscribe(hero => this.extractData(hero), error => console.log(error));
        }
    }
    newUser() {
        this.model = new user_model_1.User(0, '', '', '', '', '');
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
};
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        styleUrls: ['app/components/users/user/user.component.css'],
        templateUrl: 'app/components/users/user/user.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map