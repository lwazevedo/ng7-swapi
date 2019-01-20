import { NgModule } from '@angular/core';
import { SpeciesViewComponent } from './species-view/species-view.component';
import { SharedModule } from '../../shared/shared.module';
import { SpeciesRoutingModule } from './species-routing.module';

@NgModule({
  declarations: [SpeciesViewComponent],
  imports: [
    SharedModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
