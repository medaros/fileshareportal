import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  formdata = new FormData();
  
  send(msg: string, sender = "") {

    this.formdata.append("msg", msg)

    if(sender == "")
      return this.http.post(environment.server + "?action=profils&do=sendmail", this.formdata)
  }

  constructor(private http: HttpClient) { }
}
