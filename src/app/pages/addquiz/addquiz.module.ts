import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddQuizComponent } from './addquiz.component';
import { routing } from './addquiz.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    AddQuizComponent
  ]
})
export class AddQuizModule {}