import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

const routes: Routes = [{
  path: '',
  component: ViewComponent,
  children: [
    {
      path: '',
      component: ViewListComponent,
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',
      component: ViewDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSiteRoutingModule { }
