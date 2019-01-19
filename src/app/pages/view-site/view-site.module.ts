import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { ViewSiteRoutingModule } from './view-site-routing.module';
import { ViewListComponent } from './view-list/view-list.component';

@NgModule({
  declarations: [ViewListComponent],
  imports: [
    SharedModule,
    ViewSiteRoutingModule
  ]
})
export class ViewSiteModule { }
