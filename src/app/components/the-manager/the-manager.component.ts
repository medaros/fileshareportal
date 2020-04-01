import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-the-manager',
  templateUrl: './the-manager.component.html',
  styleUrls: ['./the-manager.component.scss'],
})
export class TheManagerComponent implements OnInit {

  constructor(private router: Router, public alertController: AlertController) { }

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
        // return to first step and go to
        // files tab
        this.step = 0
        this.router.navigate(['/tabs/tab1'])
      }, 1000);
    }

    uploadFile() {
      // step-in-progress
      this.step = 1;

      // wait 1sec then go to step 2
      setTimeout(() => {
        this.uploadFileAfter()
      }, 1000);
    }

    // after a successful or failed upload
    uploadFileAfter() {
      // step-success
      this.step = 2;

      // step-failure
      // this.step = 3;
    }

    // while enter key is pressed
    // on code input
    onCodeEnter() {
      // step-file-found
      this.step = 4

      // step-file-not-dound
      // this.step = 404
    }

    downloadFile() {

      // afficher jolie alert pour l'user
      this.downloadingAlert();
      
      // go to first step
      setTimeout(() => {
        this.step = 0
      }, 1000);
    }

    // file is downloading alert
    async downloadingAlert() {
      const alert = await this.alertController.create({
        header: 'Your file is downloading...',
        message: 'Please check your downloaded files.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

}
