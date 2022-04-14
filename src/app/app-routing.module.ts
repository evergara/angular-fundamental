import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NumberComponent } from './sales/pages/number/number.component';
import { NoCommonComponent } from './sales/pages/no-common/no-common.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const HOME_ROUTER = 'basic';
const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTER,
    pathMatch: 'full',
  },
  {
    path: HOME_ROUTER,
    component: BasicComponent,
  },
  {
    path: 'number',
    component: NumberComponent,
  },
  {
    path: 'no-common',
    component: NoCommonComponent,
  },
  {
    path: 'sort',
    component: SortComponent,
  },
  {
    path: '**',
    redirectTo: HOME_ROUTER,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
