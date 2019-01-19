import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankTemplateComponent } from './layouts/blank-template/blank-template.component';

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
