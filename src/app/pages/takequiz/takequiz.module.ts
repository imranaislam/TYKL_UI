import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TakeQuizComponent } from './takequiz.component';
import { routing } from './takequiz.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    TakeQuizComponent
  ]
})
export class TakeQuizModule {}