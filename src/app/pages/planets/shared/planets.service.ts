import { Injectable, Injector } from '@angular/core';


import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Planets } from './planets.model';


@Injectable({
  providedIn: 'root'
})
export class PlanetService extends BaseResourceService<Planets> {

  constructor(protected injector: Injector) {
      super('https://swapi.co/api/planets', injector, Planets.fromJson);
  }
}
