import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'urlImagen',
})
export class UrlImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    let url = './../../../../assets';
    if (!heroe.id && !heroe.alt_img) return `${url}/no-image.png`;
    if (heroe.alt_img) return heroe.alt_img;
    //if (heroe.alt_img.toUpperCase().includes('http', 0)) return heroe.alt_img;

    return `${url}/heroes/${heroe.id}.jpg`;
  }
}
