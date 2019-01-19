import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { flatMap, catchError, map } from 'rxjs/operators';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Site } from './site.model';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SiteService extends BaseResourceService<Site> {

  constructor(protected injector: Injector) {
      super('https://swapi.co/api/films', injector, Site.fromJson);
  }
}
