import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-i18nselect',
  templateUrl: './pipe-i18nselect.component.html',
  styleUrls: ['./pipe-i18nselect.component.scss'],
})
export class PipeI18nselectComponent {
  isToggleable: boolean = true;
  title: string = 'i18nSelect';

  person = {
    name: 'Brilis',
    genero: 'masculino',
  };

  person2 = {
    name: 'Susana',
    genero: 'femenina',
  };

  invitacionMapa = {
    masculino: 'Invitarlo',
    femenina: 'Invitarla',
  };
}
