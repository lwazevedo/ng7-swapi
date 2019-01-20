import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../../shared/site.service';
import { Site } from '../../shared/site.model';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  paramURL: string;
  resources: Site[] = [];
  otherInformation = [];
  viewList = false;
  viewDetailItemState = 'hidden';
  dataDetail;
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
    this.otherInformation = [];
    this.dataDetail = {};
    this.viewList = false;
    this.resourceService.getMultipleAll(details)
    .subscribe(otherInformation => this.otherInformation.push(otherInformation));
  }

  viewDetailItem(info) {
    this.viewDetailItemState = this.viewDetailItemState === 'hidden' ? 'visible' : 'hidden';
    this.viewList = info['viewDetail'];
    this.dataDetail = info['dataDetail'];
  }

  ocultViewDetail(ocult) {
    this.viewList = ocult['viewDetail'];
  }

  backHome() {
    this.router.navigate(['/site'], {relativeTo: this.route});
  }

}
