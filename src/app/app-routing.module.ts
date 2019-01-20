import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankTemplateComponent } from './layouts/blank-template/blank-template.component';
import { FullTemplateComponent } from './layouts/full-template/full-template.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankTemplateComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'site',
      //   pathMatch: 'full'
      // },
      {
        path: 'site', loadChildren: './pages/view-site/view-site.module#ViewSiteModule'
      },
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: FullTemplateComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'films', loadChildren: './pages/films/films.module#FilmsModule'
      },
      {
        path: 'people', loadChildren: './pages/people/people.module#PeopleModule'
      },
      {
        path: 'planets', loadChildren: './pages/planets/planets.module#PlanetsModule'
      },
      {
        path: 'species', loadChildren: './pages/species/species.module#SpeciesModule'
      },
      {
        path: 'starships', loadChildren: './pages/starships/starships.module#StarshipsModule'
      },
      {
        path: 'vehicles', loadChildren: './pages/vehicles/vehicles.module#VehiclesModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
