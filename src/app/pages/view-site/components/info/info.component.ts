import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() data: any;
  @Input() omit: Array<any[]>;
  @Input() view: Array<any[]>;
  constructor() { }

  ngOnInit() { }

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
