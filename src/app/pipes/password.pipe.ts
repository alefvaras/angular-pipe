import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordpipe'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {

    if (show) {
      let out: string = '';

      for (let i = 0; i < value.length; i++) {
        out += '*';
      }
      return out;
    } else {
      return value;
    }


  }

}
