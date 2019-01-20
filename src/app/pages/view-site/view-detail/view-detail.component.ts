import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../shared/site.service';
import { Site } from '../shared/site.model';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  paramURL: string;
  resources: Site[] = [];
  constructor(private route: ActivatedRoute, private router: Router,  private resourceService: SiteService) { }

  ngOnInit() {
    this.paramURL = atob(this.route.snapshot.paramMap.get('id'));
    this.getDetail(this.paramURL);
  }

  getDetail(_id) {
    this.resourceService.getOne(_id).subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

  viewDetail(details: string[]) {
    this.resourceService.getMultipleAll(details)
    .subscribe(r => console.log(r));
  }

  backHome() {
    this.router.navigate(['/site'], {relativeTo: this.route});
  }

}
