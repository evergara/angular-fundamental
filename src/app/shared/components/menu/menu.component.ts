import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  itemsMenu: MenuItem[];

  constructor() {
    this.itemsMenu = [];
  }

  ngOnInit(): void {
    this.itemsMenu = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Text and Date',
            icon: 'pi pi-book',
            routerLink: ['/basic'],
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: ['/number'],
          },
          {
            label: 'No common',
            icon: 'pi pi-globe',
            routerLink: ['/no-common'],
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-cog',
        items: [{ label: 'Sort', icon: 'pi pi-plus', routerLink: ['/sort'] }],
      },
    ];
  }
}
