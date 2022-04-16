import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe-i18nselect',
  templateUrl: './pipe-i18nselect.component.html',
  styleUrls: ['./pipe-i18nselect.component.scss'],
})
export class PipeI18nselectComponent {
  isToggleable: boolean = true;
  title: string = 'i18nSelect';
  body: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero excepturi repellendus debitis autem accusantium consequuntur nemo sint nesciunt aspernatur similique, quisquam ullam minus sit qui dicta ex! Rem, maiores.';
}
