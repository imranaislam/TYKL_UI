import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
  selector: 'ngx-view-quiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['viewquiz.component.css'],
})
export class ViewQuizComponent implements OnInit { 
  quizList: any ;
  message: String;

  constructor(private router: Router, private http: Http) {}

  public ngOnInit() {
    this.retrieveQuiz();


  }
retrieveQuiz(){
    this.http.get('http://localhost:8080/test-your-knowledge/viewquiz').subscribe((resp) => {
      if (resp.status === 200){
      this.quizList = resp.json();
      // console.log(this.quizList);
    }
  },
  (error) => {
      if (error.status === 400) {
          this.message = 'Our Application experienced an issue.  Please try again.';
      }
  },
    );
  }

  retrieveQuestions(quizId){

   localStorage.setItem('quiz_id', quizId);
   // alert(localStorage.getItem('quiz_id'));
   this.router.navigate(['pages/updatequiz']);
   
  }

}
