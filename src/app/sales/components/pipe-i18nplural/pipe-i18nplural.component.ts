import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe-i18nplural',
  templateUrl: './pipe-i18nplural.component.html',
  styleUrls: ['./pipe-i18nplural.component.scss'],
})
export class PipeI18npluralComponent {
  isToggleable: boolean = true;
  title: string = 'i18nPlural';
  clients: string[] = ['Brayan', 'Brilis', 'Maria', 'Petra'];

  clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos # cliente esperando',
    '=2': 'tenemos # clientes esperando',
    other: 'tenemos # clientes esperando',
  };
}
