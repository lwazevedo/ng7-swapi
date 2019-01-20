import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { FilmsRoutingModule } from './films-routing.module';
import { FilmsViewComponent } from './films-view/films-view.component';

@NgModule({
  declarations: [FilmsViewComponent],
  imports: [
    SharedModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
