import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
  selector: 'ngx-view-quiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['updatequiz.component.css'],
})
export class UpdateQuizComponent implements OnInit { 
  questionList: any;
  headers: any;
  message: String;
  quiz_id: number;

  constructor(private router: Router, private http: Http) {}

  public ngOnInit() {
  alert('quiz_id:' + localStorage.getItem('quiz_id'));
  this.retrieveQuestions();

  }

public retrieveQuestions() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // console.log(this.headers);


    this.http.post('http://localhost:8080/test-your-knowledge/quizquestionlist'
      , `quiz_id=${localStorage.getItem('quiz_id')}`, { headers: this.headers})
      .subscribe(
      (questions) => {
        if (questions.status === 200) {
           // alert('got here');
            this.router.navigate(['pages/updatequiz']);
          // console.log(questions);          
          //console.log(questions);
        }
       // alert('got here 2');
      },
  (error) => {
      if (error.status === 400) {
          this.message = 'Our Application experienced an issue.  Please try again.';
      }
  },
    );
  }
}
