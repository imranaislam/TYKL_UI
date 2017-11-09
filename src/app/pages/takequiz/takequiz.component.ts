import { Component } from '@angular/core';
 import { HTTPTestService } from '../../@core/utils/http.component';

@Component({
  selector: 'ngx-take-quiz',
  template: `<script src="https://code.angularjs.org/2.0.0-beta.0/http.dev.js"></script>
            <strong>Test Yourself: Take a Quiz</strong>
            <button (click)="onTestGet()">Test GET</button>
            <p>Output: {{getData}}</p>
            <button>Test POST</button>
            <p>Output: {{postData}}</p>
  
  `,
    providers: [HTTPTestService],
})
export class TakeQuizComponent {
   constructor(private httpServiceVar: HTTPTestService) {}

  getData: string;
  postData: string;

  onTestGet() {
    // alert('got here');
    this.httpServiceVar.getCurrentTime()
      .subscribe (
      data => this.getData = JSON.stringify(data),
        Error => alert(Error),
       );

  } 

    
}
