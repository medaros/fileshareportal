import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-manager',
  templateUrl: './the-manager.component.html',
  styleUrls: ['./the-manager.component.scss'],
})
export class TheManagerComponent implements OnInit {

  constructor() { }

  // step-init
  step: number = 0;

  ngOnInit() {}

     /* To copy Text from Textbox */
     copyToClipBoard(inputElement){
      console.log(inputElement)
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
    }

    uploadFile() {
      // step-in-progress
      this.step = 1;
    }

}
