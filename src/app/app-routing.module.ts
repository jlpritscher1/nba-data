import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { PerComponent } from './per/per.component';
import { StatLeadersComponent } from './stat-leaders/stat-leaders.component';
import { FosterComponent } from './foster/foster.component';
import { HeightComponent } from './height/height.component';
import { PerAdvancedStatsComponent } from './per-advanced-stats/per-advanced-stats.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'basics',
  component: BasicsComponent
}, {
  path:'per',
  component: PerComponent
}, {
  path:'stat-leaders',
  component: StatLeadersComponent,
}, {
  path:'foster',
  component: FosterComponent,
}, {
  path:'height',
  component: HeightComponent,
}, {
  path: 'per-advanced-stats',
  component: PerAdvancedStatsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
