import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitLongText'})

export class customTextPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "";
    
    if(value.length > 15) {
        newStr = value.substr(0, 15) + "..."
    } else {
      return value
    }

    return newStr;
  }
}