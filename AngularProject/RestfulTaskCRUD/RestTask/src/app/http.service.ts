import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable()
export class HttpService {
    constructor(private _http: HttpClient){
    	 this.getTasks();
    	 //this.getFind();
    	};

    getTasks(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
 	};

 	addTask(newtask){
    	return this._http.post('/new', newtask);
	};

	updateTask(id, update1){
		return this._http.post(('/update/' + id), update1);
	}

	removeTask(id){
		return this._http.get(('/remove/' + id));
	}
 	// getFind(){

 	// 	return this._http.get('/' );
 	// }
};




