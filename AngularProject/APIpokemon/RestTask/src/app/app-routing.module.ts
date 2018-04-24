import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { homeComponent } from './Home/home.component';
// import { newdataComponent } from './Home/NewData/newdata.component';
// import { editdataComponent } from './Home/EditData/editdata.component';
// import { reviewlistComponent } from './Home/ReviewList/reviewlist.component';
// import { newreviewComponent } from './Home/ReviewList/NewReview/newreview.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'new',component: newdataComponent }, 
  //  { path: 'edit/:id',component: editdataComponent }, 
  //  { path: 'reviews/:id',component: reviewlistComponent }, 
  //  { path: 'write/:id',component: newreviewComponent }, 
   




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
