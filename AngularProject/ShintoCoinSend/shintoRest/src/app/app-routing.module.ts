import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from './Home/home.component';
import { minecoinComponent } from './minecoin/minecoin.component';
import { buycoinComponent } from './BuyCoin/buycoin.component';
import { sellcoinComponent } from './SellCoin/sellcoin.component';
import { browseledgerComponent } from './BrowseLedger/browseledger.component';
import { showledgerComponent } from './BrowseLedger/ShowLedger/showledger.component';


const routes: Routes = [
  { path: 'Home', component: homeComponent },
  { path: 'MineCoin',component: minecoinComponent }, 
  { path: 'BuyCoin',component: buycoinComponent },
  { path: 'SellCoin',component: sellcoinComponent },
  { path: 'BrowseLedger',component: browseledgerComponent },
  { path: 'BrowseLedger/ShowLedger/:id',component: showledgerComponent },




  // { path: 'beta',component: BetaComponent },
  // // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
