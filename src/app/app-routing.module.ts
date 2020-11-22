import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemPointsPageComponent } from './pages/redeem-points-page/redeem-points-page.component';


const routes: Routes = [
  {path: 'redeem-points', component: RedeemPointsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
