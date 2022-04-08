import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [SidebarComponent, Page404Component],
  exports: [SidebarComponent, Page404Component],
  imports: [CommonModule],
})
export class SharedModule {}
