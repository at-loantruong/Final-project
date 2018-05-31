import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideBarComponent } from './left-side-bar.component';
import { Routes, RouterModule, Router } from '@angular/router';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    LeftSideBarComponent
  ],
  exports: [LeftSideBarComponent],
})
export class LeftSideBarModule {

}
