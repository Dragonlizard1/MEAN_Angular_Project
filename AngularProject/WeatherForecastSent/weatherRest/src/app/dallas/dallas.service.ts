import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DallasService {

  constructor(private _http: HttpClient) {

   }

  DallasTask(){

  	let DallasURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Dallas" + ",us&&APPID=8dd1a234a19ba5a45678160be2aefb5b";
  	return this._http.get(DallasURL);

	}
}