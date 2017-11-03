import { Routes, RouterModule } from '@angular/router';

import { AddQuizComponent } from './addquiz.component';

const routes: Routes = [
  {
    path: '',
    component: AddQuizComponent
  }
];

export const routing = RouterModule.forChild(routes);