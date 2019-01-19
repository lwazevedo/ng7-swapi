import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-template',
  templateUrl: './blank-template.component.html',
  styleUrls: ['./blank-template.component.css']
})
export class BlankTemplateComponent implements OnInit {
  isLoged: boolean;
  constructor() { this.isLoged = false; }

  ngOnInit() {
  }

}
