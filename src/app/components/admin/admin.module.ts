import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  { path:'', component: AdminComponent}
];


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    MainModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
})
export class AdminModule {

}
