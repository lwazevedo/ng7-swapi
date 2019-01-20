import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import { MENUS } from './menu';
import { Menu } from './menu.metadata';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public links: Array<Menu> = [];
  public currentUrl: string;
  public selectedItemIndex = -1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getmlinks();
    this.getCurrentUrl();
  }
  getmlinks() {
    this.links = MENUS.filter(itens => itens).sort((a, b) => {
      if (a.sublinks) {
        a.sublinks = this.sortChildren(a.sublinks);
      }
      if (b.sublinks) {
        b.sublinks = this.sortChildren(b.sublinks);
      }
      if (a.order || b.order) {
        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }
      } else {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      }

      return 0;
    });
  }

  sortChildren(children) {
    children = children.sort((a, b) => {
      if (a.order || b.order) {
        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }
      } else {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      }
      return 0;
    });

    if (children.subLinks) {
      this.sortChildren(children.subLinks);
    } else {
      return children;
    }
  }

  getCurrentUrl() {
    this.router.events
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        }
      });
  }


  public selectedMenuItem(itemIndex: number) {
    this.selectedItemIndex = itemIndex;
  }

  public hasSublinks(menu: Menu): boolean {
    return menu.sublinks && menu.sublinks.length > 0 ? true : false;
  }
}
