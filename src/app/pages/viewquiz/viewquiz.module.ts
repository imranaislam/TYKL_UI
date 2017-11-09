import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewQuizComponent } from './viewquiz.component';
import { routing } from './viewquiz.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    ViewQuizComponent,
  ],
})
export class ViewQuizModule {}
