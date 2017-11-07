import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddQuizComponent } from './addquiz.component';
import { routing } from './addquiz.routing';
import { MyModalsComponent } from './mymodals.component';
import { MyModalComponent } from './mymodal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AddQuizComponent,
    MyModalsComponent,
  ],
})
export class AddQuizModule {}
