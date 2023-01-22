import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RegisterPageComponent],
  entryComponents: [RegisterPageComponent]
})
export class RegisterPageModule { }
