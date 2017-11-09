
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'ngx-add-quiz',
  templateUrl: './addquiz.component.html',
})

export class AddQuizComponent implements OnInit {
  
  public quizName;
  public q1;
  public q1a1;
  public q1a2;
  public q1a3;
  public q1a4;

  public radioQ1;

  public headers;

  postData: string;
  
  public ngOnInit() {}

  
  constructor(private http: Http) {}

          mycollapse(q){ 

              const myvar = document.getElementById(q).hidden;
              if (myvar === false) {
                document.getElementById(q).hidden = true;
              } else {
                document.getElementById(q).hidden = false;
              }
            }

            public addQuizSubmit(){
              var x = this.radioQ1;
alert(x);
              this.headers = new Headers();
              this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
              this.http.post('http://localhost:8080/test-your-knowledge/add'
              , `quizName=${this.quizName}&q1=${this.q1}&q1a1=${this.q1a1}&q1a2=${this.q1a2}&q1a3=${this.q1a3}&q1a4=${this.q1a4}&radioQ1=${this.radioQ1}`, {headers: this.headers})
              .subscribe(
                data => this.postData = JSON.stringify(data),
                
                    
                      
              );
              // alert(this.postData);

            }

}





