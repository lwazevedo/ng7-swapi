import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  @Input() data: Array<any[]>;
  @Input() idTable: string;
  @Output() viewDetailItem = new EventEmitter();
  @Input() omit: Array<any[]>;
  @Input() view: Array<any[]>;
  p = 1;
  headtable: Array<any[]>;
  constructor() { }

  ngOnInit() {
    this.headtable = this.view || this.omit;
    this.headtable = this.headtable.map(value => this.transformData(value));
  }

  viewDetail(info) {
    this.viewDetailItem.emit({ viewDetail: true, dataDetail: info });
  }

  omitOnViewField(data) {
    if (!_.isUndefined(this.omit) && this.omit.length > 0) {
      data = _.omit(data, this.omit) || {};
    } else {
      data = _.pick(data, this.view) || {};
    }
    return Object.assign({}, _.sortBy(data, this.headtable[0]));
  }

  transformData(value) {
    return _.capitalize(value.replace(/_/g, ' '));
  }

}
