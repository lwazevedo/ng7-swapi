import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as _ from 'lodash';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  animations: [
    trigger('viewDeitalItem', [
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
export class VehiclesComponent implements OnInit {
  @Input() data: Array<[]>;
  viewDetail = false;
  viewDetailItemState = 'hidden';
  dataDetail;
  constructor() { }

  ngOnInit() {
  }
  viewDetailItem(info) {
    this.viewDetailItemState = this.viewDetailItemState === 'hidden' ? 'visible' : 'hidden';
    this.viewDetail = info['viewDetail'];
    this.dataDetail = info['dataDetail'];
  }

  ocultViewDetail(ocult) {
    this.viewDetail = ocult['viewDetail'];
  }

}
