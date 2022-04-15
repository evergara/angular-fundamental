import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicComponent } from './pages/basic/basic.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { NumberComponent } from './pages/number/number.component';
import { SortComponent } from './pages/sort/sort.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { PipePageComponent } from './components/pipe-page/pipe-page.component';
import { PipeBasicComponent } from './components/pipe-basic/pipe-basic.component';
import { PipeDateComponent } from './components/pipe-date/pipe-date.component';
import { PipeDecimalComponent } from './components/pipe-decimal/pipe-decimal.component';
import { PipeCurrencyComponent } from './components/pipe-currency/pipe-currency.component';
import { PipePercentComponent } from './components/pipe-percent/pipe-percent.component';

@NgModule({
  declarations: [
    BasicComponent,
    NoCommonComponent,
    NumberComponent,
    SortComponent,
    TitlePageComponent,
    PipePageComponent,
    PipeBasicComponent,
    PipeDateComponent,
    PipeDecimalComponent,
    PipeCurrencyComponent,
    PipePercentComponent,
  ],
  exports: [BasicComponent, NoCommonComponent, NumberComponent, SortComponent],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
