import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BurbankService {

  constructor(private _http: HttpClient) { }

    BurbankTask(){

  	let seattleURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "burbank" + ",us&&APPID=8dd1a234a19ba5a45678160be2aefb5b";
	//let seattleURL  = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'Seattle' + ',us&&appid=a2609c1e81c378c5ba7e8ab219d9cb6a';  //kyla key
  	return this._http.get(seattleURL);

	}

}
