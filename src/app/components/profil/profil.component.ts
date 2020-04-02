import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  // email:string = "arosmed3@gmail.com"
  email:string = ""
  uploads:number = 46
  downloads:number = 123
  filesOnline:number = 120

  constructor(private authService: AuthService) { }

  ngOnInit() {

    if(this.authService.loginCheck() != "") {
      // this.email = this.authService.loginCheck()
    }

  }

}
