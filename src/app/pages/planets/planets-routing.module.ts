import { PlanetsViewComponent } from './planets-view/planets-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: PlanetsViewComponent, data: {
      title: 'Planets',
      description: 'V.1.0.0',
      urls: [
          { title: 'Home', url: '/home', icon: 'home' },
          { title: 'Registration'},
          { title: 'Planets' }
      ]
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
