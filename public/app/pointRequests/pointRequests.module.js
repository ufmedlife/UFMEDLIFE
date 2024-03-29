"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const pointRequests_routes_1 = require("./pointRequests.routes");
const pointRequests_component_1 = require("./pointRequests.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const edit_component_1 = require("./edit/edit.component");
const filter_module_1 = require("../Filters/filter.module");
let PointRequestsModule = class PointRequestsModule {
};
PointRequestsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            filter_module_1.PipeModule.forRoot(),
            router_1.RouterModule.forChild(pointRequests_routes_1.PointRequestsRoutes),
        ],
        declarations: [
            pointRequests_component_1.PointRequestsComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            edit_component_1.EditComponent,
        ]
    })
], PointRequestsModule);
exports.PointRequestsModule = PointRequestsModule;
//# sourceMappingURL=pointRequests.module.js.map