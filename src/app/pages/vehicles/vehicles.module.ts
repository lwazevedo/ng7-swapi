import { VehiclesRoutingModule } from './vehicles-routing.module';
import { NgModule } from '@angular/core';
import { VehiclesViewComponent } from './vehicles-view/vehicles-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [VehiclesViewComponent],
  imports: [
    SharedModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
