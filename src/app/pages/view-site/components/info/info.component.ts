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
  constructor() { }

  ngOnInit() {
    this.omitField();
  }

  omitField() {
    this.data = _.omit(this.data, this.omit);
  }

  transformData(value) {
    return _.capitalize(value.replace(/_/g, ' '));
  }
}
