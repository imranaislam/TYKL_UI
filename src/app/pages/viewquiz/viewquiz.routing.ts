import { Routes, RouterModule } from '@angular/router';
import { ViewQuizComponent } from './viewquiz.component';

const routes: Routes = [
  {
    path: '',
    component: ViewQuizComponent,
  },
];

export const routing = RouterModule.forChild(routes);
