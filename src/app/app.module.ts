import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BasicsComponent } from './basics/basics.component';
import { PerComponent } from './per/per.component';
import { StatLeadersComponent } from './stat-leaders/stat-leaders.component';
import { FosterComponent } from './foster/foster.component';
import { HeightComponent } from './height/height.component';
import { PerAdvancedStatsComponent } from './per-advanced-stats/per-advanced-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    BasicsComponent,
    PerComponent,
    StatLeadersComponent,
    FosterComponent,
    HeightComponent,
    PerAdvancedStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
