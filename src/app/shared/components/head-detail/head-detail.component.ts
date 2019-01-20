import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head-detail',
  templateUrl: './head-detail.component.html',
  styleUrls: ['./head-detail.component.css']
})
export class HeadDetailComponent implements OnInit {
  @Input() title: string;
  @Input() ocultIcon: Boolean;
  @Output() ocultViewDetail = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ocultDetail() {
    this.ocultViewDetail.emit({ viewDetail: false });
  }

}
