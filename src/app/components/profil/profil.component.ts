import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/services/mail/mail.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  // email:string = "arosmed3@gmail.com"
  email:string = ""
  uploads;
  downloads;
  filesOnline;

  section = 0
  feedback: boolean = true;

  constructor(private authService: AuthService, private mail: MailService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {

    if(this.authService.loginCheck() != "") {
      // this.email = this.authService.loginCheck()
    }

    setInterval(() => this.getOverview(), 2500)

  }

  tutorial() {
    this.router.navigate(["/tutorial"])
  }

  getOverview() {
    this.uploads = JSON.parse(localStorage.getItem("uploads")) || 0
    this.downloads = JSON.parse(localStorage.getItem("downloads")) || 0
    this.filesOnline = JSON.parse(localStorage.getItem("filesOnline")) || 0
  }

  sendFeedback(msg) {

    this.mail.send(msg).subscribe(res => {
      if(res) {
        this.feedback = false
        this.showThanks()
      }
    })
    
  }

  async showThanks() {
    
    const alert = await this.alertController.create({
      header: 'Your feedback has been sent !',
      subHeader: 'Thank you, we appreciate your support !',
      buttons: ['OK']
    });

    await alert.present();
  }

}
