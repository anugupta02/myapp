import { Component } from '@angular/core';
import { ModalService } from '../_modal';

@Component({ templateUrl: 'test-page.component.html' })
export class TestPageComponent {
  bodyText: string;
  bodyTxt: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    this.bodyTxt = 'Anu Gupta made tall modal';

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
