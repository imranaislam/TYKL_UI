import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UpdateQuizComponent } from './updatequiz.component';
import { routing } from './updatequiz.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    UpdateQuizComponent,
  ],
})
export class UpdateQuizModule {}
