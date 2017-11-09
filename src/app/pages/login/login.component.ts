import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public username;
    public password;
    public headers;
    public userData;

    public ngOnInit() {
    }

    constructor(private router: Router, private http: Http) {
    }

    public loginSubmit() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/login'
            , `username=${this.username}&password=${this.password}`, { headers: this.headers })
            .subscribe(
            (data) => {
                this.userData = data.json();
                // console.log(this.userData.userrole);
                if (this.userData.userrole === 'sme') {
                    this.router.navigate(['pages/dashboard']);
                }
            },
            );
    }

}





