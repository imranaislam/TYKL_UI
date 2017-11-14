
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';


@Component({
  selector: 'ngx-add-quiz',
  templateUrl: './addquiz.component.html',
})

export class AddQuizComponent implements OnInit {
  
  public q;
  public a1;
  public a2;
  public a3;
  public a4;
  public subject;
  public complexity;
  public radioQ1;
  public message;
  subjectAreas: any;
  questionComplexityList: any;
  subjectArea: number;
  expertiseLevel: number;

  public subjectDrop;
  public complexDrop;
  public validationComplex;
  public validationSubject;
  public validationQuestion;
  public validationAnswer;
  public validationResult;


  public headers;

  postData: string;
  
  public ngOnInit() {
    document.getElementById('divq1').hidden = false;

        this.retrieveSubjectAreas();
        this.retrieveQuestionComplexityList();
    }

  
  constructor(private router: Router, private http: Http) {}

          mycollapse(q){ 

              const myvar = document.getElementById(q).hidden;
              if (myvar === false) {
                document.getElementById(q).hidden = true;
              } else {
                document.getElementById(q).hidden = false;
              }
            }

            public retrieveSubjectAreas() {
              this.http.get('http://localhost:8080/test-your-knowledge/subjectareas')
                  .subscribe(
                  (subjectareas) => {
                      if (subjectareas.status === 200) {
                          this.subjectAreas = subjectareas.json();
                          // console.log(this.subjectAreas[0].quiz_subject_area);
                      }
                  },
                  (error) => {
                      if (error.status === 400) {
                          this.message = 'Our Application experienced an issue.  Please try again.';
                      }
                  },
              );
          }
      
          public retrieveQuestionComplexityList() {
              this.http.get('http://localhost:8080/test-your-knowledge/questioncomplexitylist')
                  .subscribe(
                  (questionComplexityList) => {
                      if (questionComplexityList.status === 200) {
                          this.questionComplexityList = questionComplexityList.json();
                          // console.log(this.questionComplexityList[0].question_complexity_level_description);
                      }
                  },
                  (error) => {
                      if (error.status === 400) {
                          this.message = 'Our Application experienced an issue.  Please try again.';
                      }
                  },
              );
          }
            

            public addQuizSubmit(){


                const e = (document.getElementById('subjectDrop')) as HTMLSelectElement;
                const sel = e.selectedIndex;
              
                const complex = (document.getElementById('complexDrop')) as HTMLSelectElement;
                const complexVal = complex.selectedIndex;

                const quest = (document.getElementById('q')) as HTMLInputElement;
                const questVal = quest.value;

                const a1 = (document.getElementById('a1')) as HTMLInputElement;
                const a1Val = a1.value;

                const a2 = (document.getElementById('a2')) as HTMLInputElement;
                const a2Val = a2.value;

                const a3 = (document.getElementById('a3')) as HTMLInputElement;
                const a3Val = a3.value;

                const a4 = (document.getElementById('a4')) as HTMLInputElement;
                const a4Val = a4.value;

                const res = (document.getElementById('radioQ1')) as HTMLInputElement;
                const resVal = res.checked;

                if (sel < 0){
                    this.validationSubject = 'Must choose a Subject';
                    return;
                }

                if (complexVal < 0){
                    this.validationComplex = 'Must choose complexity';
                    return;
                }

                if (questVal === ''){
                    // alert('You must specify a question');
                    this.validationQuestion = 'Must Enter a Question';
                    return;
                }

                if (a1Val === '' || a2Val === '' || a3Val === '' || a4Val === '' ){
                   // alert('Please complete All Answer Fields');
                   this.validationAnswer = 'Must Complete All Answers';
                    return;
                }

                if (this.radioQ1 === undefined){
                    // alert('Please Choose a Correct Answer');
                    this.validationResult = 'Must Select a Correct Answer';
                    return;
                }



              this.headers = new Headers();
              this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
              this.http.post('http://localhost:8080/test-your-knowledge/add'
              , `q=${this.q}&subject=${this.subjectDrop}&complexity=${this.complexDrop}&a1=${this.a1}&a2=${this.a2}&a3=${this.a3}&a4=${this.a4}&result=${this.radioQ1}`, {headers: this.headers})
              .subscribe(
                (data) => {
                  if (data.status === 200){
                    this.message = `Question created!`;
                    sleep (1000).then(() => {
                     location.reload();
                    
                  }); 

                } else {
                  this.message = `Question creation failed. Try again...`;
                }
              
              function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
              }
              
            });

}

}
