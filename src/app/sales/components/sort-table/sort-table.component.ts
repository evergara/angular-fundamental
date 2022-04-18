import { Component } from '@angular/core';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent {
  bySort: string = '';
  heroes: Heroe[] = [
    {
      name: 'superman',
      fly: true,
      color: 2,
    },
    {
      name: 'Batman',
      fly: false,
      color: 1,
    },
    {
      name: 'Robin',
      fly: false,
      color: 3,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: 0,
    },
    {
      name: 'Linterna verde',
      fly: true,
      color: 3,
    },
  ];

  bySorts(option: string): void {
    this.bySort = option;
  }
}
