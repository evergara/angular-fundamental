import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-title-page',
  templateUrl: './country-title-page.component.html',
  styleUrls: ['./country-title-page.component.scss'],
})
export class CountryTitlePageComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
