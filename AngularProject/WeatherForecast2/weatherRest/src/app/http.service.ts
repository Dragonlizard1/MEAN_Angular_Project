import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable()
export class HttpService {
    constructor(private _http: HttpClient){
    	// this.Task1();
    	 //this.getFind();
    	};

 // Task1(){

 //  	let seattleURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Seattle, Washington" + ",us&&APPID=8dd1a234a19ba5a45678160be2aefb5b";

 //  	return this._http.get(seattleURL);

	// }
 //    getTasks(){
 //    // our http response is an Observable, store it in a variable
 //    return this._http.get('/tasks');
 //    // subscribe to the Observable and provide the code we would like to do with our data from the response
 //    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
 // 	};

 // 	addTask(newtask){
 //    	return this._http.post('/new', newtask);
	// };

	// updateTask(id, update1){
	// 	return this._http.post(('/update/' + id), update1);
	// }

	// removeTask(id){
	// 	return this._http.get(('/remove/' + id));
	// }
 	// getFind(){

 	// 	return this._http.get('/' );
 	// }
};




