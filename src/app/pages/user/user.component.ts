import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
    selector: 'ngx-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

    headers: any;
    subjectArea: number;
    expertiseLevel: number;
    message: String;

    public ngOnInit() {
    }

    constructor(private router: Router, private http: Http) {
    }

    public viewQuestions() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/takequiz'
            , `subjectArea=${this.subjectArea}&expertiseLevel=${this.expertiseLevel}`, { headers: this.headers })
        .subscribe(
            (questions) => {
                if (questions.status === 200) {
                    this.router.navigate(['pages/takequiz']);
                    console.log(questions);
                }
            },
            (error) => {
                console.log(error.status);
                
                if (error.status === 400) {
                    this.router.navigate(['pages/takequiz']);
                    this.message = 'Our Sincere Apologies.  We are working on creating challenges in the subject area you chose.  Please come back soon and try again.';
                }
            },
        );
    }
}
