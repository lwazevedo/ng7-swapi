import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { PlanetsRoutingModule } from './planets-routing.module';
import { ViewComponent } from './components/view/view.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ViewListComponent } from './components/view-list/view-list.component';

@NgModule({
  declarations: [ViewComponent, ViewDetailComponent, ViewListComponent],
  imports: [
    SharedModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
