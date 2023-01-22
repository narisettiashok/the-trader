import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoginPageComponent],
  entryComponents: [LoginPageComponent]
})
export class LoginPageModule { }
