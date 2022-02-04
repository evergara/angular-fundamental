import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    LogoComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
