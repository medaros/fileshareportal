import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  email:string = "arosmed3@gmail.com"
  uploads:number = 46
  downloads:number = 123
  filesOnline:number = 120
  
  constructor() { }

  ngOnInit() {}

}
