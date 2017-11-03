"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const user_model_1 = require("../models/user.model");
let LoginComponent = class LoginComponent {
    constructor() {
        this.model = new user_model_1.User(0, '', '', '', '', '');
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'user-login',
        styleUrls: ['app/components/users/user/user.component.css'],
        templateUrl: 'app/templates/login.template.html',
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=user-login.component.js.map