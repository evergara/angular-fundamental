import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylowercase',
})
export class MyLowercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}
