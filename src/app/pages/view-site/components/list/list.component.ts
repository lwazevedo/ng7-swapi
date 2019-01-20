import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: Array<any[]>;
  @Output() viewDetailItem = new EventEmitter();
  p = 1;
  constructor() { }

  ngOnInit() {
  }

  viewDetail(info) {
    this.viewDetailItem.emit({ viewDetail: true, dataDetail: info });
  }

}
