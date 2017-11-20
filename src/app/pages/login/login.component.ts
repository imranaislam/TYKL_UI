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
    username: String;
    password: String;
    headers: any;
    userData: any;
    message: String = '';

    public ngOnInit() {
    }

    constructor(private router: Router, private http: Http) {
    }

    public loginSubmit() {
        this.message = 'Verify User Eligibility...';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/login'
            , `username=${this.username}&password=${this.password}`, { headers: this.headers })
            .subscribe(
            (data) => {
                this.message = '';
                if (data.status === 200) {
                    this.userData = data.json();

                    localStorage.setItem('firstName', this.userData.firstname);

                    // console.log(this.userData.userrole);
                    if (this.userData.userrole === 'sme') {
                        localStorage.setItem('theUser', 'sme');
                        this.router.navigate(['pages/dashboard']);
                    }
                    if (this.userData.userrole === 'user') {
                        localStorage.setItem('theUser', 'user');
                        this.router.navigate(['pages/dashboard']);
                    } else {
                        this.message = 'You are not a registered user.  Please register using "Register here" link above.';
                    }
                }
            },
            (error) => {
                this.message = '';
                if (error.status === 400) {
                    this.message = 'You are not a registered user.  Please register using "Register here" link above.';
                }
            },
        );
    }
}
