import { forEach } from '@angular/router/src/utils/collection';
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

    errorMessage: String = '';
    headers: any;
    subjectArea: number;
    expertiseLevel: number;
    questionanswers: Array<any> = [];
    expectedAnswers: Array<number> = [];
    expectedAnswersOptionText: Array<number> = [];
    userAnswers: Array<number> = [];
    validationResults: Array<string> = [];
    totalQuestionsAnswered: any;
    successRate: any;

    constructor(private router: Router, private http: Http) {
    }

    public ngOnInit() {
        this.retrieveQuestions();
    }

    public retrieveQuestions() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/takequiz'
            , `subjectArea=${(<HTMLInputElement>document.getElementById('subjectAreaSelection')).value}&expertiseLevel=${(<HTMLInputElement>document.getElementById('questionComplexitySelection')).value}`, { headers: this.headers })
            .subscribe(
            (data) => {
                if (data.status === 200) {
                    this.router.navigate(['pages/takequiz']);
                    this.questionanswers = data.json();

                    for (const question of this.questionanswers) {
                        for (const answer of question.answers) {
                            if (answer.answer_option_validity_flag === 'Y') {
                                this.expectedAnswers[question.question_id] = answer.answer_id;
                                this.expectedAnswersOptionText[question.question_id] = answer.answer_option_text;
                            }
                        }
                    }
                }
            },
            (error) => {
                if (error.status === 400) {
                    this.router.navigate(['pages/takequiz']);
                    this.errorMessage = 'Our Sincere Apologies.  We are working on creating challenges in the subject area you chose.  Please come back soon and try again.';
                }
            },
        );
    }

    public saveresponse(question_id: string, answer_id: string) {
        this.userAnswers[question_id] = answer_id;
        this.totalQuestionsAnswered += 1;
    }

    public validateAnswers() {
        let numberOfCorrect: any;
        if (this.totalQuestionsAnswered !== this.questionanswers.length) {
            this.errorMessage = 'You must answer all the Questions to begin validation';
        } else {
            this.errorMessage = '';
            for (const i in this.expectedAnswers) {
                if (this.expectedAnswers[i] !== null) {
                    if (this.expectedAnswers[i] === this.userAnswers[i]) {
                        this.validationResults[i] = 'Answer for the question ' + i + ' is Correct.';
                        numberOfCorrect += 1;
                    } else {
                        this.validationResults[i] = 'Answer for the question ' + i + ' is Wrong.  Correct Answer is ' + this.expectedAnswersOptionText[i] + '.';
                    }
                }
            }
            this.successRate = 'Percentage of correct responses : ' + (Math.round((numberOfCorrect / this.questionanswers.length) * 100) + '%');
        }
    }
}
