import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changestringwithparams',
})
export class ChangeStringWithParamsPipe implements PipeTransform {
  transform(value: string, enUppercase: boolean = true): string {
    return enUppercase ? value.toUpperCase() : value.toLowerCase();
  }
}
