import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Components } from './components/index';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './components/admin/admin.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: AppComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    // [...Components],
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [AdminModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
