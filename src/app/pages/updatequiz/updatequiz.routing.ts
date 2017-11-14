import { Routes, RouterModule } from '@angular/router';
import { UpdateQuizComponent } from './updatequiz.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateQuizComponent,
  },
];

export const routing = RouterModule.forChild(routes);
