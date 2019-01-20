import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { ViewSiteRoutingModule } from './view-site-routing.module';
import { ViewListComponent } from './components/view-list/view-list.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [ViewListComponent, ViewDetailComponent, ViewComponent],
  imports: [
    SharedModule,
    ViewSiteRoutingModule
  ]
})
export class ViewSiteModule { }
