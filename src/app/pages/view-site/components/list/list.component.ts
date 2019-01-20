import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: Array<any[]>;
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
      return _.omit(data, this.omit) || {};
    } else {
      return _.pick(data, this.view) || {};
    }
  }

  transformData(value) {
    return _.capitalize(value.replace(/_/g, ' '));
  }

}
