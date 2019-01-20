import { NgModule } from '@angular/core';
import { PeopleViewComponent } from './people-view/people-view.component';
import { SharedModule } from '../../shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [PeopleViewComponent],
  imports: [
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
