import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Planets } from '../../shared/planets.model';
import { PlanetService } from '../../shared/planets.service';

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
    ]),
    trigger('listAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ViewListComponent implements OnInit {
  planets: Planets[] = [];
  searchBarState = 'hidden';
  listState = 'ready';
  idTable = 'listPlanets';
  p = 1;
  searchForm: FormGroup;
  searchControl: FormControl;
  constructor(private resourceService: PlanetService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { this.search(); }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.planets = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

  pageChanged(evt) {
    this.resourceService.getAll(`/?page=${evt}`)
    .subscribe(
      resources => this.planets = resources,
      error => alert('Erro ao carregar a lista')
    );
    this.p = evt;
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
      resources => this.planets = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

  detailPlanet(id) {
    id = btoa(id.match(/\d/g)[0]).toString();
    this.router.navigate(['/planets/detail', id], {relativeTo: this.route});
  }

}
