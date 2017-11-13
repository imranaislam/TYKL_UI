import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
  selector: 'ngx-takequiz',
  template: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css'],
})
export class TakeQuizComponent implements OnInit {

  message: String;
  headers: any;
  subjectArea: number;
  expertiseLevel: number;

  constructor(private router: Router, private http: Http) {
  }

  public ngOnInit() {
    this.retrieveQuestions();
  }

  public retrieveQuestions() {
    // console.log('Retrieving Question and Answers');
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // console.log(this.headers);
    // console.log('subject ' + this.subjectArea);
    // console.log('expertiseLevel ' + this.expertiseLevel);
    this.http.post('http://localhost:8080/test-your-knowledge/takequiz'
      , `subjectArea=${1}&expertiseLevel=${1}`, { headers: this.headers })
      // , `subjectArea=${this.subjectArea}&expertiseLevel=${this.expertiseLevel}`, { headers: this.headers })
      .subscribe(
      (questions) => {
        if (questions.status === 200) {
          // console.log(questions);
        }
      },
      (error) => {
        if (error.status === 400) {
          this.message = 'Our Sincere Apologies.  We are working on creating challenges in the subject area you chose.  Please come back soon and try again.';
        }
      },
    );
  }
}
