import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsViewComponent } from './starships-view/starships-view.component';


const routes: Routes = [
  {
    path: '', component: StarshipsViewComponent, data: {
      title: 'Starships',
      description: 'V.1.0.0',
      urls: [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'Registration' },
        { title: 'Starships & Vehicles' },
        { title: 'Starships' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
