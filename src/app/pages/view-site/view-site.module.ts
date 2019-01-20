import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { ViewSiteRoutingModule } from './view-site-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewComponent } from './view/view.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SpeciesComponent } from './components/species/species.component';

@NgModule({
  declarations: [ViewListComponent, ViewDetailComponent, ViewComponent, CharactersComponent, PlanetsComponent, StarshipsComponent, VehiclesComponent, SpeciesComponent],
  imports: [
    SharedModule,
    ViewSiteRoutingModule
  ]
})
export class ViewSiteModule { }
