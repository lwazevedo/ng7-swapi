import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesViewComponent } from './vehicles-view/vehicles-view.component';



const routes: Routes = [
  {
    path: '', component: VehiclesViewComponent, data: {
      title: 'Vehicles',
      description: 'V.1.0.0',
      urls: [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'Registration' },
        { title: 'Starships & Vehicles' },
        { title: 'Vehicles' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
