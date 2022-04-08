import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';
import { GifsComponent } from './gifs.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';
import { GifComponent } from './gif/gif.component';

@NgModule({
  declarations: [
    GifsSearchComponent,
    GifsComponent,
    GifsListComponent,
    GifComponent,
  ],
  exports: [GifsComponent],
  imports: [CommonModule, GifsRoutingModule],
})
export class GifsModule {}
