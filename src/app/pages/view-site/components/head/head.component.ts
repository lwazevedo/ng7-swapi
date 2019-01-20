import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Input() title: string;
  @Output() ocultViewDetail = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ocultDetail() {
    this.ocultViewDetail.emit({viewDetail: false});
  }
}
