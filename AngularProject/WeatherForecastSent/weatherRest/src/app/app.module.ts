import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';  
import { HttpClientModule } from '@angular/common/http';
import { SeattleService } from './seattle/seattle.service';
import { BurbankService } from './burbank/burbank.service';
import { ChicagoService } from './chicago/chicago.service';
import { DallasService } from './dallas/dallas.service';
import { DCService } from './dc/dc.service';
import { SanJoseService } from './sanjose/sanjose.service';

import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService, SeattleService, BurbankService, ChicagoService, DallasService, DCService, SanJoseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
