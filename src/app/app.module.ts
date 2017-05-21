import { GraficoModule } from './grafico/grafico.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';
import { DataService } from './data-service.service';

export const environmentFireBase = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDmVX2pdQUEFo_6iWqTC5g1zTmSPY57l2g",
    authDomain: "motokey-fc935.firebaseapp.com",
    databaseURL: "https://motokey-fc935.firebaseio.com",
    projectId: "motokey-fc935",
    storageBucket: "motokey-fc935.appspot.com",
    messagingSenderId: "653473345585"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GraficoModule,
    AngularFireModule.initializeApp(environmentFireBase.firebase)
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
