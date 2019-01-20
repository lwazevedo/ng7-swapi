import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-template',
  templateUrl: './blank-template.component.html',
  styleUrls: ['./blank-template.component.css']
})
export class BlankTemplateComponent implements OnInit {
  isLoged: boolean;
  constructor(private router: Router) {
    this.isLoged = Boolean(localStorage.getItem('isLoggedin'));
    console.log(this.isLoged);
  }

  ngOnInit() {
  }

  logout() {
    console.log('console.log');
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/site']);
  }

}
