import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './pages/basic/basic.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { NumberComponent } from './pages/number/number.component';
import { SortComponent } from './pages/sort/sort.component';

@NgModule({
  declarations: [
    BasicComponent,
    NoCommonComponent,
    NumberComponent,
    SortComponent,
  ],
  exports: [BasicComponent, NoCommonComponent, NumberComponent, SortComponent],
  imports: [CommonModule],
})
export class SalesModule {}
