import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'urlImagen',
})
export class UrlImagenPipe implements PipeTransform {
  transform(heroe: Heroe): unknown {
    return `./../../../../assets/heroes/${heroe.id}.jpg`;
  }
}
