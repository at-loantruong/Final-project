import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LeftSideBarModule } from './left-side-bar/left-side-bar.module';
import { ContentModule } from './content/content.module';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    LeftSideBarModule,
    ContentModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [MainComponent],
})
export class MainModule {

}
