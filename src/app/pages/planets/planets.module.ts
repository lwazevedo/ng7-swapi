import { NgModule } from '@angular/core';
import { PlanetsViewComponent } from './planets-view/planets-view.component';
import { SharedModule } from '../../shared/shared.module';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  declarations: [PlanetsViewComponent],
  imports: [
    SharedModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
