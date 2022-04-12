import { Component, Input } from '@angular/core';
import { NotificationError } from '@feature/paises/shared/interfaces/notificationerror';

@Component({
  selector: 'app-country-error',
  templateUrl: './country-error.component.html',
  styleUrls: ['./country-error.component.scss'],
})
export class CountryErrorComponent {
  @Input() notificationError?: NotificationError;

  constructor() {}

  isShow() {
    if (!this.notificationError) return false;
    return this.notificationError.show;
  }
}
