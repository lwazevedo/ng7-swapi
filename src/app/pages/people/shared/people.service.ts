import { Injectable, Injector } from '@angular/core';


import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { People } from './people.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService extends BaseResourceService<People> {

  constructor(protected injector: Injector) {
      super('https://swapi.co/api/people/', injector, People.fromJson);
  }
}
