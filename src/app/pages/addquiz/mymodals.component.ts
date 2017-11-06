import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MyModalComponent } from './mymodal';

@Component({
  selector: 'ngx-mymodals',
  styleUrls: ['./mymodals.component.scss'],
  templateUrl: './mymodals.component.html',
})
export class MyModalsComponent {

  constructor(private modalService: NgbModal) { }

  showLargeModal() {
    const activeModal = this.modalService.open(MyModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Quiz Name';
  }
  showSmallModal() {
    const activeModal = this.modalService.open(MyModalComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Small Modal';
  }

  showStaticModal() {
    const activeModal = this.modalService.open(MyModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }

}
