import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankTemplateComponent } from './layouts/blank-template/blank-template.component';

import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'site',
        pathMatch: 'full'
      },
      {
        path: 'site', loadChildren: './pages/view-site/view-site.module#ViewSiteModule'
      },
      {
        path: 'people',
        loadChildren: './pages/people/people.module#PeopleModule'
      },
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
