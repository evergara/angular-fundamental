import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { PipeI18nselectComponent } from './components/pipe-i18nselect/pipe-i18nselect.component';
import { PipeI18npluralComponent } from './components/pipe-i18nplural/pipe-i18nplural.component';
import { PipeCustomizedComponent } from './components/pipe-customized/pipe-customized.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyLowercasePipe } from './pipes/my-lowercase.pipe';
import { PipeCustomized2Component } from './components/pipe-customized2/pipe-customized2.component';
import { PipeCustomizedWithParamsComponent } from './components/pipe-customized-with-params/pipe-customized-with-params.component';
import { ChangeStringWithParamsPipe } from './pipes/change-string-with-params.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortTableComponent } from './components/sort-table/sort-table.component';

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
    PipeI18nselectComponent,
    PipeI18npluralComponent,
    PipeCustomizedComponent,
    MyUppercasePipe,
    MyLowercasePipe,
    PipeCustomized2Component,
    PipeCustomizedWithParamsComponent,
    ChangeStringWithParamsPipe,
    SortPipe,
    SortTableComponent,
  ],
  exports: [BasicComponent, NoCommonComponent, NumberComponent, SortComponent],
  imports: [CommonModule, FormsModule, PrimeNgModule],
})
export class SalesModule {}
