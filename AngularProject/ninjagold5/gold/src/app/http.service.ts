import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
  	// this.getHome();
  }

  getHome(){
  	return this._http.get('/gold');
  }

  setGold(goldCount){
  	console.log("Inside setGold function", goldCount);
 
  	return this._http.post('/results1', goldCount);
  }
}
