"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_component_1 = require("./home/home.component");
const contactUs_component_1 = require("./contactUs/contactUs.component");
const header_component_1 = require("./header/header.component");
exports.AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: header_component_1.HeaderComponent,
        outlet: 'header',
    },
    {
        path: 'ContactUs',
        component: contactUs_component_1.contactUsComponent
    },
];
//# sourceMappingURL=app.routes.js.map