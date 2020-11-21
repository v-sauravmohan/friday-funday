import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatSliderModule } from '@angular/material';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { RedeemPointsPageComponent } from './pages/redeem-points-page/redeem-points-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedeemPointsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    // for material testing adding mat slider
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
