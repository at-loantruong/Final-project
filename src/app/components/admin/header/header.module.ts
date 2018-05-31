import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {

}
