import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';
import { GifsComponent } from './gifs.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';
import { GifComponent } from './gif/gif.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GifsPageComponent } from './gifs-page/gifs-page.component';

@NgModule({
  declarations: [
    GifsSearchComponent,
    GifsComponent,
    GifsListComponent,
    GifComponent,
    GifsPageComponent,
  ],
  exports: [GifsComponent],
  imports: [CommonModule, GifsRoutingModule, SharedModule],
})
export class GifsModule {}
