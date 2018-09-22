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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../authentication.service");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.g = document.getElementById('errorMessage');
        this.g.style.display = 'none';
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this._authenticationService.signin(this.credentials).subscribe(function (result) {
            return _this._router.navigate(['/authentication/members', _this._authenticationService.user._id]);
        }, function (error) {
            _this.errorMessage = error;
            _this.g.style.display = 'none';
            _this.g.style.display = 'block';
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'SignIn',
            templateUrl: 'app/authentication/signin/signin.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map