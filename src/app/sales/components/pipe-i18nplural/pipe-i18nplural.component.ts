import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe-i18nplural',
  templateUrl: './pipe-i18nplural.component.html',
  styleUrls: ['./pipe-i18nplural.component.scss'],
})
export class PipeI18npluralComponent {
  isToggleable: boolean = true;
  title: string = 'i18nPlural';
  body: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero excepturi repellendus debitis autem accusantium consequuntur nemo sint nesciunt aspernatur similique, quisquam ullam minus sit qui dicta ex! Rem, maiores.';
}
