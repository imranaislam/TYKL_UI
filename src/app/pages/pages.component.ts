import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS, USER_MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  templateUrl:  './pages.component.html',
})
export class PagesComponent implements OnInit {

  usertype: boolean;
  userString: String;
  
  public ngOnInit() {

    this.userString =localStorage.getItem('theUser');
    if (this.userString === 'sme')
    {
      this.usertype = true;
    } else {
      this.usertype = false;
    }
     
  }
  menu = MENU_ITEMS;
  menub = USER_MENU_ITEMS;
}
