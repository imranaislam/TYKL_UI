import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { LoginWrapperComponent } from './login.wrapper.component';
import { routing } from './login.routing';


@NgModule({
  imports: [
  //  CommonModule,
  //  FormsModule,
    routing,
  ],
  declarations: [
    LoginWrapperComponent,
  ],
})
export class LoginWrapperModule {}
