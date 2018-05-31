import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [FooterComponent],
})
export class FooterModule {

}
