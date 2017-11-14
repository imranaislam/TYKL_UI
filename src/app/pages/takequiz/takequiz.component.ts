import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
    selector: 'ngx-takequiz',
    templateUrl: './takequiz.component.html',
    styleUrls: ['./takequiz.component.css'],
})

export class TakeQuizComponent implements OnInit {

    message: String;
    headers: any;
    subjectArea: number;
    expertiseLevel: number;
    questionanswers: any;

    constructor(private router: Router, private http: Http) {
    }

    public ngOnInit() {
        this.retrieveQuestions();
    }

    public retrieveQuestions() {
        // console.log('Retrieving Question and Answers');
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // console.log('subject ' + (<HTMLInputElement>document.getElementById('subjectAreaSelection')).value);
        // console.log('expertiseLevel ' + (<HTMLInputElement>document.getElementById('questionComplexitySelection')).value);
        this.http.post('http://localhost:8080/test-your-knowledge/takequiz'
            , `subjectArea=${(<HTMLInputElement>document.getElementById('subjectAreaSelection')).value}&expertiseLevel=${(<HTMLInputElement>document.getElementById('questionComplexitySelection')).value}`, { headers: this.headers })
            // , `subjectArea=${this.subjectArea}&expertiseLevel=${this.expertiseLevel}`, { headers: this.headers })
            .subscribe(
            (questionanswers) => {
                if (questionanswers.status === 200) {
                    this.router.navigate(['pages/takequiz']);
                    // console.log(questionanswers);

                    this.questionanswers = questionanswers.json();
                }
            },
            (error) => {
                if (error.status === 400) {
                    // this.router.navigate(['pages/takequiz']);
                    this.message = 'Our Sincere Apologies.  We are working on creating challenges in the subject area you chose.  Please come back soon and try again.';
                }
            },
        );
    }
}
