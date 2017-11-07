
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-add-quiz',
  templateUrl: './addquiz.component.html',
})
export class AddQuizComponent {
  constructor() {}

mycollapse(q){ 

    const myvar = document.getElementById(q).hidden;
    if (myvar === false) {
      document.getElementById(q).hidden = true;
    } else {
      document.getElementById(q).hidden = false;
    }
  }
}





