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
var members_service_1 = require("../members.service");
var PointListComponent = /** @class */ (function () {
    function PointListComponent(_membersService) {
        this._membersService = _membersService;
    }
    PointListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._membersService.pointList().subscribe(function (members) { return _this.members = members; });
    };
    PointListComponent = __decorate([
        core_1.Component({
            selector: 'pointList',
            templateUrl: 'app/authentication/pointList/pointList.template.html',
            styleUrls: ['app/app.styles.css']
        }),
        __metadata("design:paramtypes", [members_service_1.MembersService])
    ], PointListComponent);
    return PointListComponent;
}());
exports.PointListComponent = PointListComponent;
//# sourceMappingURL=pointList.component.js.map