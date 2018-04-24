import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';  
import { HttpClientModule } from '@angular/common/http';

import { homeComponent } from './Home/home.component';
import { minecoinComponent } from './minecoin/minecoin.component';
import { buycoinComponent } from './BuyCoin/buycoin.component';
import { sellcoinComponent } from './SellCoin/sellcoin.component';
import { browseledgerComponent } from './BrowseLedger/browseledger.component';
import { showledgerComponent } from './BrowseLedger/ShowLedger/showledger.component';


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    minecoinComponent,
    buycoinComponent,
    sellcoinComponent,
    browseledgerComponent,
    showledgerComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
