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
  quizDescription: string;
  question_id: number;
  questionText: string;
  
  constructor(private router: Router, private http: Http) {}

  public ngOnInit() {
  // alert('quiz_id:' + localStorage.getItem('quiz_id'));
  this.retrieveQuestions();

  }

public retrieveQuestions() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');


    this.http.post('http://localhost:8080/test-your-knowledge/quizquestionlist'
      , `quiz_id=${localStorage.getItem('quiz_id')}`, { headers: this.headers})
      .subscribe(
      (questions) => {
        if (questions.status === 200) {
            this.router.navigate(['pages/updatequiz']);
            this.questionList = questions.json();
            this.quizDescription = localStorage.getItem('quiz_description');
        }
      },
  (error) => {
      if (error.status === 400) {
          this.message = 'Our Application experienced an issue.  Please try again.';
      }
  },
    );
  }

  public deleteQuestion(questionId, questionText){
     localStorage.setItem('question_id', questionId);
     localStorage.setItem('question_text', questionText);

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:8080/test-your-knowledge/delete'
    , `questionId=${localStorage.getItem('question_id')}`, { headers: this.headers})
    .subscribe(
    (data) => {
      if (data.status === 200) {
        this.questionText = localStorage.getItem('question_text');
          this.message = `Following question has been deleted: `;
          this.ngOnInit();  

      }
    },
(error) => {
    if (error.status === 400) {
        this.message = 'Our Application experienced an issue.  Please try again.';
    }
},
  );
     
}

}
