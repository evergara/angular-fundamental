import { NgModule } from '@angular/core';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [ButtonModule, CardModule, MenuModule],
})
export class PrimeNgModule {}
