import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Site } from '../shared/site.model';
import { SiteService } from '../shared/site.service';



@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '0px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class ViewListComponent implements OnInit {

  resources: Site[] = [];
  searchBarState = 'hidden';
  p = 1;
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private resourceService: SiteService, private fb: FormBuilder) { this.search() }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

  pageChanged(evt) {
    console.log(evt);
  }

  search() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm => this.resourceService.getAll(`/?search=${searchTerm}`))
    ).subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}

