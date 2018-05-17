import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { MainComponent } from './components/admin/main/main.component';
import { ContentComponent } from './components/admin/main/content/content.component';
import { LeftSideBarComponent } from './components/admin/main/left-side-bar/left-side-bar.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { UserFooterComponent } from './components/user/user-footer/user-footer.component';
import { UserMainComponent } from './components/user/user-main/user-main.component';
import { UserMainContentComponent } from './components/user/user-main/user-main-content/user-main-content.component';
import { UserMainSideBarComponent } from './components/user/user-main/user-main-side-bar/user-main-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContentComponent,
    LeftSideBarComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserMainComponent,
    UserMainContentComponent,
    UserMainSideBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
