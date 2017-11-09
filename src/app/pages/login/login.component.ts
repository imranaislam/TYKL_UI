
import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    private username;
    private password;
    private headers;
    
    postData: string;
    userrole: string;
    
    public ngOnInit() {
    }
    
    constructor(private http: Http) {
    }
    
    public loginSubmit() {
     this.headers = new Headers();
     this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http.post('http://localhost:8080/test-your-knowledge/login'
      , `username=${this.username}&password=${this.password}`, {headers: this.headers})
      .subscribe(
          //data => this.postData = JSON.stringify(data),
           data => {console.log(data)},
             
      );
      //alert(this.postData);
    }

}





