import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    let firstLetter = value.charAt(0).toUpperCase();
    let restOfLetters = value.slice(1).toLowerCase();
    return firstLetter+restOfLetters;
  }

}
