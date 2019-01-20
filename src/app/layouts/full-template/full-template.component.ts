import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-template',
  templateUrl: './full-template.component.html',
  styleUrls: ['./full-template.component.css']
})
export class FullTemplateComponent implements OnInit {
  isLoged: boolean;
  constructor() { this.isLoged = Boolean(localStorage.getItem('isLoggedin')); }

  ngOnInit() {
  }

}
