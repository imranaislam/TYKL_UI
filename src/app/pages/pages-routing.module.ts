import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  }, {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule',
  }, {
    path: 'viewquiz',
    loadChildren: './viewquiz/viewquiz.module#ViewQuizModule',
  }, {
    path: 'addquiz',
    loadChildren: './addquiz/addquiz.module#AddQuizModule',
  },  {
    path: 'takequiz',
    loadChildren: './takequiz/takequiz.module#TakeQuizModule',
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  /*}, {
    path: 'mylogin',
    loadChildren: './mylogin/mylogin',*/
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
