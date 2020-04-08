import { Component, OnInit, Input } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit {

  niceEmpty: boolean;
  debug: void;

  constructor(private files: FilesService, public alertController: AlertController, private router: Router) { }

  fileList = [];
  array = [];

  ngOnInit() {
    setInterval(() => this.getMyFiles(), 2500)
  }

  getMyFiles() {
    // if not connected
    this.fileList = JSON.parse(localStorage.getItem("files"))
    // no files
    if (this.fileList == null || this.fileList.length == 0)
      this.niceEmpty = true
    else
      this.niceEmpty = false

      console.log(this.fileList)

    // update files
    if (this.fileList != null)
    this.updateFiles(this.fileList)
  }

  // file is downloading alert
  async copyFileCode(fileCode: string) {

    let codecontainer = document.createElement("input");
    document.body.appendChild(codecontainer)
    codecontainer.value = fileCode
    codecontainer.select()
    document.execCommand('copy');
    codecontainer.setSelectionRange(0, 0);
    document.body.removeChild(codecontainer)

    const alert = await this.alertController.create({
      header: 'Your file code is copied !',
      subHeader: 'You can past it anywhere',
      message: fileCode,
      buttons: ['OK']
    });

    await alert.present();
  }

  updateFiles(files) {

    // this.fileList = JSON.parse(localStorage.getItem("files"))

    for (let file = 0; file < files.length; file++) {

      // for each file
      const f = files[file];
      this.files.shuffle(f.uploadtime).subscribe(
        res => {
          this.debug = console.log(res)
          if (res.info == "delete") {
            // get files
            // let files = JSON.parse(localStorage.getItem("files"))
            // remove deleted file
            files.pop(file)
            // save files
            localStorage.setItem("files", JSON.stringify(files))
          }
        }
      )

    }

  }

  downloadUpload() {
    this.router.navigate(["/tabs/tab2"])
  }
}
