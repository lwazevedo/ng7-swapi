import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { ViewSiteRoutingModule } from './view-site-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewComponent } from './view/view.component';
import { HeadComponent } from './components/head/head.component';
import { InfoComponent } from './components/info/info.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ViewListComponent, ViewDetailComponent, ViewComponent, HeadComponent, InfoComponent, ListComponent],
  imports: [
    SharedModule,
    ViewSiteRoutingModule
  ]
})
export class ViewSiteModule { }
