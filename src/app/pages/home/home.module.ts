import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
