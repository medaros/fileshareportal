import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  formdata = new FormData();

  shuffle(frontTime: string): Observable<any> {
    this.formdata.append("fronttime", frontTime)
    return this.http.post(environment.server + "?action=files&do=comparetime", this.formdata)
  }

  uploadFile(file: File): Observable<any> {

    this.clearForm()
    this.formdata.append('file', file);

    return this.http.post(environment.server + '?action=files&do=uploadFile', this.formdata)
      .pipe(map(response => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      );
  }

  findFileWithCode(fileCode: string): Observable<any> {

    this.clearForm()
    console.log(fileCode)
    this.formdata.append('filecode', fileCode);

    return this.http.post(environment.server + '?action=files&do=getFile', this.formdata)
      .pipe(map(response => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      );
  }

  public downloadFile(pathtofile: string) {
    this.http.get(environment.server + 'uploads/?url=' + pathtofile, { responseType: 'blob' }).subscribe(res => {
      var url = window.URL.createObjectURL(res);
      var a = document.createElement('a');
      a.href = url;
      a.download = pathtofile;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove(); // remove the element
    });
  }

  clearForm() {
    this.formdata = new FormData()
  }

}
