import { FilmsViewComponent } from './films-view/films-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: FilmsViewComponent, data: {
          title: 'Films',
          description: 'V.1.0.0',
          urls: [
              { title: 'Home', url: '/home', icon: 'home' },
              { title: 'Registration' },
              { title: 'Films' }
          ]
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
