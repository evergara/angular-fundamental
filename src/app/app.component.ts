import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-fundamental';
  value: number = 10000;
  person = {
    name: 'evergara',
  };

  showName(): void {
    console.log(this.title);
    console.log(this.value);
    console.log(this.person);
  }
}
