import { Component, OnInit } from '@angular/core';
import { Site } from '../shared/site.model';
import { SiteService } from '../shared/site.service';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  resources: Site[] = [];

  constructor(private resourceService: SiteService) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

}
