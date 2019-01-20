import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { ViewSiteRoutingModule } from './view-site-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ViewListComponent, ViewDetailComponent, ViewComponent],
  imports: [
    SharedModule,
    ViewSiteRoutingModule
  ]
})
export class ViewSiteModule { }
