import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemPointsPageComponent } from './pages/redeem-points-page/redeem-points-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'view-scores',
    component: ScorePageComponent,
  },
  {
    path: 'redeem-points',
    component:RedeemPointsPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
