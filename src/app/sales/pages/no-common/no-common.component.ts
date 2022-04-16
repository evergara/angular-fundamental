import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styleUrls: ['./no-common.component.scss'],
})
export class NoCommonComponent implements OnInit {
  title: string = 'Pipes no tan comunes';
  description: string =
    'Pipes incluidos en angular - usualmente en el Common Modules';

  constructor() {}

  ngOnInit(): void {}
}
