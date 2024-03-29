import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutes } from './authentication.routes';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

//crud//
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
// import { PointListComponent } from './pointList/pointList.component';
// import { AddPointComponent } from './addPoint/addPoint.component';

import { PipeModule }    from '../Filters/filter.module';

@NgModule ({
  imports: [
    FormsModule,
    CommonModule,
    PipeModule.forRoot(),
    RouterModule.forChild(AuthenticationRoutes),
  ],
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    // PointListComponent,
    // AddPointComponent,
  ]
})
export class AuthenticationModule {}
