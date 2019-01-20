import { StarshipsRoutingModule } from './starships-routing.module';
import { NgModule } from '@angular/core';
import { StarshipsViewComponent } from './starships-view/starships-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [StarshipsViewComponent],
  imports: [
    SharedModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
