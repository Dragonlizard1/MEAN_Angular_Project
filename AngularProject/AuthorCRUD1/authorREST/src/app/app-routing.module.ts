import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from './Home/home.component';
import { newdataComponent } from './NewData/newdata.component';
import { editdataComponent } from './EditData/editdata.component';


const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'new',component: newdataComponent }, 
   { path: 'edit/:id',component: editdataComponent }, 




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
