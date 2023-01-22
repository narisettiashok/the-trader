import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page/error-page.component';
import { LoginPageModule } from './login-page/login-page.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { DashboardPageModule } from './dashboard-page/dashboard-page.module';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule, LoginPageModule, RegisterPageModule, DashboardPageModule
  ],
  exports: [ErrorPageComponent],
  entryComponents: [ErrorPageComponent]
})
export class PagesModule { }
