import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  usertype: boolean;
  userString: String;
  firstName: String;
  
  public ngOnInit() {

    this.userString = localStorage.getItem ('theUser'); 
    if (this.userString === 'sme') {
      this.usertype = true;
    } else {
      this.usertype = false;
    }

    this.firstName = localStorage.getItem('firstName');
}
}
