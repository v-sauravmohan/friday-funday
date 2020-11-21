import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RedeemPointsPageComponent } from './pages/redeem-points-page/redeem-points-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'score-page',
    component: ScorePageComponent,
  },
  {
    path:'redeem',
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
