import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Site } from './site.model';



@Injectable({
  providedIn: 'root'
})
export class SiteService extends BaseResourceService<Site> {

  constructor(protected injector: Injector) {
      super('https://swapi.co/api/films', injector, Site.fromJson);
  }
}
