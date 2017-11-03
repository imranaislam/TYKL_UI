import { Routes, RouterModule } from '@angular/router';

import { TakeQuizComponent } from './takequiz.component';

const routes: Routes = [
  {
    path: '',
    component: TakeQuizComponent
  }
];

export const routing = RouterModule.forChild(routes);