import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleViewComponent } from './people-view/people-view.component';



const routes: Routes = [
  { path: '', component: PeopleViewComponent, data: {
      title: 'People',
      description: 'V.1.0.0',
      urls: [
          { title: 'Home', url: '/home', icon: 'home' },
          { title: 'Registration'},
          { title: 'People' }
      ]
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
