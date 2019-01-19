import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSiteRoutingModule } from './view-site-routing.module';
import { ViewListComponent } from './view-list/view-list.component';

@NgModule({
  declarations: [ViewListComponent],
  imports: [
    CommonModule,
    ViewSiteRoutingModule
  ]
})
export class ViewSiteModule { }
