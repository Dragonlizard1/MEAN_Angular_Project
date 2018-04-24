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

	  find1Task(artist){

  	
	//let	url = "https://itunes.apple.com/search?term=" + artist + "&entity=musicVideo"
  	//let url = "https://itunes.apple.com/us/music-video/yonc%C3%A9/780332973?uo=4"
  	//let url = "https://nt.disney.com/AthensAPI2/Help/Api/GET-equipment-Id/1"

  	let url  = "https://api.nasa.gov/planetary/sounds?q=apollo&api_key=mwlok4UKyhVNXZSfvswjRny12yyEetBofUF8Bapv"
  	return this._http.get(url);

	}
}
