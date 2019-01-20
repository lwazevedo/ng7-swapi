import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesViewComponent } from './species-view/species-view.component';


const routes: Routes = [
  { path: '', component: SpeciesViewComponent, data: {
      title: 'Species',
      description: 'V.1.0.0',
      urls: [
          { title: 'Home', url: '/home', icon: 'home' },
          { title: 'Registration'},
          { title: 'Species' }
      ]
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
