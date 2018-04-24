import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
	shintocoin: number = 0;
	minecoin: number = 1;
	valuecoin: number = 1;
	transactionlist: any = [];
    constructor(private _http: HttpClient){
    	
		};

	addTask(newtask){
    	return this._http.post('/newprocess', newtask);
	};

	getallTask(){
		return this._http.get("/getalltask");
	};
		
	removeTask(id){

		return this._http.get(('/remove/' + id));
	}	

	getoneTask(id){
		return this._http.get(('/' + id));
	}


	updateTask(data){
		return this._http.post(('/update/' + data._id), {author: data.author});
	}



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





 	// getFind(){

 	// 	return this._http.get('/' );
 	// }
	
};




