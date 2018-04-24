import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';  
import { HttpClientModule } from '@angular/common/http';

import { homeComponent } from './Home/home.component';
import { newdataComponent } from './NewData/newdata.component';
import { editdataComponent } from './EditData/editdata.component';
import { displayComponent } from './Display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    newdataComponent,
    editdataComponent,
    displayComponent

  
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
