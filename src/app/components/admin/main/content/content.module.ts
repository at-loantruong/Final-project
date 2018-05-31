import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { GroupsModule } from './groups/groups.module';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';
import { SchedulesModule } from './schedules/schedules.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { GroupsComponent } from './groups/groups.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    LeaguesModule,
    GroupsModule,
    TeamsModule,
    UsersModule,
    SchedulesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContentComponent
  ],
  exports: [ContentComponent],
})
export class ContentModule {

}
