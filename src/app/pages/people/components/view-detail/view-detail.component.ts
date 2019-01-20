import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../../shared/people.model';
import { PeopleService } from '../../shared/people.service';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  paramURL: string;
  resources: People[] = [];
  otherInformation = [];
  viewList = false;
  viewDetailItemState = 'hidden';
  dataDetail;

  constructor(private route: ActivatedRoute, private router: Router, private resourceService: PeopleService) { }

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
    this.router.navigate(['/people'], { relativeTo: this.route });
  }
}
