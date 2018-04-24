import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from './Home/home.component';
import { newdataComponent } from './NewData/newdata.component';
import { editdataComponent } from './EditData/editdata.component';
import { displayComponent } from './Display/display.component';

const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'products/new',component: newdataComponent }, 
   { path: 'products/edit/:id',component: editdataComponent }, 
   { path: 'products',component: displayComponent }




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
