import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient){
    	
		};

	addauthorTask(newtask){
    	return this._http.post('/authorprocess', newtask);
	};

	newquoteTask(id,newtask){
		return this._http.post('/quoteprocess/' + id, newtask);
	}

	getallTask(){
		return this._http.get("/getalltask");
	};
		


	getoneTask(id){
		return this._http.get(('/' + id));
	}


	updateTask(data){
		return this._http.post(('/update/' + data._id), {author: data.author});
	}

	voteupdateTask(quote_id, num){
		return this._http.post(('/voteupdate/' + quote_id), {vote: num});
	}

	removeTask(id){

		return this._http.get(('/remove/' + id));
	}	


	removeQuote(id){

		return this._http.get(('/removequote/' + id));
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




