import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { FilesService } from 'src/app/services/files/files.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-the-manager',
  templateUrl: './the-manager.component.html',
  styleUrls: ['./the-manager.component.scss'],
})
export class TheManagerComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  msg: {};
  fileUploadDetail: any;
  filepath: any;

  constructor(private router: Router, public alertController: AlertController, private files: FilesService) { }

  // step-init
  step: number = 0;

  ngOnInit() { }

  openFileDialog() {
    document.getElementById("file").click()
  }

  /* To copy Text from Textbox */
  copyToClipBoard(inputElement) {
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

  uploadFile(event) {
    // step-in-progress
    this.step = 1;
    this.selectedFiles = event.target.files;
    this.currentFile = this.selectedFiles.item(0);

    setTimeout(() => {
      this.files.uploadFile(this.currentFile).subscribe(

        response => {
          // clear input
          this.selectedFiles = null;
          // go to next step with data if there is :
          if (response) this.uploadFileAfter(true, response)

        },
        err => {
          // show retry error :
          this.uploadFileAfter(false)
        });

    }, 500);
  }

  // after a successful or failed upload
  uploadFileAfter(res, data = null) {

    // save data in variable for later use
    data != null
      ? this.fileUploadDetail = data
      : this.fileUploadDetail = null;

    // step-success
    if (res)
      this.step = 2;

    // step-failure
    else {
      this.step = 3;
      return
    }

    // get file details
    let localDb = new Array()
    console.log(localStorage.getItem("files"))
    console.log(localDb)
    // get saved file list
    if(localStorage.getItem("files") != "" 
    || localStorage.getItem("files") != null)
    localDb.push(JSON.parse(localStorage.getItem("files"))) 
    
    console.log(localStorage.getItem("files"))
    console.log(localDb)
    // if our file doesn't exist in local database
    if(!localDb.includes(data))
    localDb.push(data) // we push the new file with it's details
    
    // save everything in localstorage
    localStorage.setItem("files", JSON.stringify(localDb))
    console.log(localStorage.getItem("files"))
    console.log(localDb)
  }

  // while enter key is pressed
  // on code input
  findFile(fileCode) {

    setTimeout(() => {
      this.files.findFileWithCode(fileCode).subscribe(

        response => {
          // go to next step with data if there is :
          console.log(response)
          if (response) this.findFileAfter(true, response)

        },
        err => {
          // show retry error :
          this.findFileAfter(false)
        });

    }, 500);

  }

  findFileAfter(res, data = null) {
    // step-file-found
    if (res && data.filepath) {
      this.filepath = data.filepath
      this.step = 4
    }
    // step-file-not-dound
    else
      this.step = 404
  }

  downloadFile() {
    this.files.downloadFile(this.filepath)
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
