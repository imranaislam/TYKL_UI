import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-mymodal',
  templateUrl: './mymodal.html',
})
export class MyModalComponent {

  modalHeader: string;
  modalContent = ``;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
