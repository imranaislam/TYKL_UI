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
[
    {
        "question_text": "Which of these keywords is used to make a class?",
        "answer_id": 1,
        "answer_option_text": "class",
        "answer_option_validity_flag": "Y"
    },
    {
        "question_text": "Which of these keywords is used to make a class?",
        "answer_id": 2,
        "answer_option_text": "claass",
        "answer_option_validity_flag": "N"
    },
    {
        "question_text": "Which of these keywords is used to make a class?",
        "answer_id": 3,
        "answer_option_text": "function",
        "answer_option_validity_flag": "N"
    },
    {
        "question_text": "Which of these keywords is used to make a class?",
        "answer_id": 4,
        "answer_option_text": "None of the above mentioned",
        "answer_option_validity_flag": "N"
    },
    {
        "question_text": "Which of the following is a valid declaration of an object of class Box?",
        "answer_id": 1,
        "answer_option_text": "Box obj = new Box();",
        "answer_option_validity_flag": "Y"
    },
    {
        "question_text": "Which of the following is a valid declaration of an object of class Box?",
        "answer_id": 2,
        "answer_option_text": "Box obj = new Box;",
        "answer_option_validity_flag": "N"
    },
    {
        "question_text": "Which of the following is a valid declaration of an object of class Box?",
        "answer_id": 3,
        "answer_option_text": "obj = new Box();",
        "answer_option_validity_flag": "N"
    },
    {
        "question_text": "Which of the following is a valid declaration of an object of class Box?",
        "answer_id": 4,
        "answer_option_text": "new Box obj;",
        "answer_option_validity_flag": "N"
    }
]