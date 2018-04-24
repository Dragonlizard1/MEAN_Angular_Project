import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';  
import { HttpClientModule } from '@angular/common/http';

import { homeComponent } from './Home/home.component';
import { newdataComponent } from './Home/NewData/newdata.component';
import { editdataComponent } from './Home/EditData/editdata.component';
// import { reviewlistComponent } from './Home/ReviewList/reviewlist.component';
// import { newreviewComponent } from './Home/ReviewList/NewReview/newreview.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    newdataComponent,
    editdataComponent,
    // reviewlistComponent,
    // newreviewComponent

  
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
