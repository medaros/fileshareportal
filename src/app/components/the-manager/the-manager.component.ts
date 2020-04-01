import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-the-manager',
  templateUrl: './the-manager.component.html',
  styleUrls: ['./the-manager.component.scss'],
})
export class TheManagerComponent implements OnInit {

  constructor(private router: Router) { }

  // step-init
  step: number = 0;

  ngOnInit() {}

     /* To copy Text from Textbox */
     copyToClipBoard(inputElement){
      console.log(inputElement)
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);

      // wait 1sec then go to step 2
      setTimeout(() => {
        console.log("dfsdfds")
        this.router.navigate(['/tabs/tab1'])
      }, 1000);
    }

    uploadFile() {
      // step-in-progress
      this.step = 1;

      // wait 1sec then go to step 2
      setTimeout(() => {
        this.uploadSuccess()
      }, 1000);
    }

    // after a successful upload
    uploadSuccess() {
      // step-success
      this.step = 2;

      // step-failure
      // this.step = 3;
    }

}
