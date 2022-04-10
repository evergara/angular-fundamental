import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';
import { GifsComponent } from './gifs.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';
import { GifComponent } from './gif/gif.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsHttpService } from './shared/services/gifs-http.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    GifsSearchComponent,
    GifsComponent,
    GifsListComponent,
    GifComponent,
    GifsPageComponent,
    SidebarComponent,
  ],
  exports: [GifsComponent],
  imports: [CommonModule, GifsRoutingModule],
  providers: [GifsHttpService],
})
export class GifsModule {}
