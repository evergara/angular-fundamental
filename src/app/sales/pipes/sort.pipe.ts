import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Heroe[], bySort: string = ''): Heroe[] {
    switch (bySort) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'fly':
        return heroes.sort((a, b) => (a.fly > b.fly ? -1 : 1));
      case 'color':
        return heroes.sort((a, b) => (a.color < b.color ? 1 : -1));
      default:
        return heroes;
    }
    // if (bySort === 'name') {
    //   heroes = heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
    // }
    // if (bySort === 'fly') {
    //   heroes = heroes.sort((a, b) => (a.fly > b.fly ? 1 : -1));
    // }
    // if (bySort === 'color') {
    //   heroes = heroes.sort((a, b) => (a.color < b.color ? 1 : -1));
    // }
    // return heroes;
  }
}
