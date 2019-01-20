import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
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
export class CharactersComponent implements OnInit {
  @Input() data: Array<[]>;
  viewDetail = false;
  viewDetailItemState = 'hidden';
  dataDetail;
  p = 1;
  constructor() { }

  ngOnInit() {
  }

  viewDetailItem(item) {
    this.viewDetailItemState = this.viewDetailItemState === 'hidden' ? 'visible' : 'hidden';
    this.viewDetail = true;
    this.dataDetail = item;
  }
}
