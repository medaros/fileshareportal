import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  closeTutorial() {
    setTimeout(() => {
      this.navCtrl.back()
    }, 500);
  }

}
