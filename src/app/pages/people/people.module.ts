import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { ViewComponent } from './components/view/view.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ViewComponent, ViewDetailComponent, ViewListComponent],
  imports: [
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
