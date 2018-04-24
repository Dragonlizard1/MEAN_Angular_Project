import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient){
    	
		};

	addrestaurantTask(newtask){
    	return this._http.post('/restaurantprocess', newtask);
	};

	newreviewTask(id,newtask){
		return this._http.post('/reviewprocess/' + id, newtask);
	}

	getallTask(){
		return this._http.get("/getalltask");
	};
		


	getoneTask(id){
		return this._http.get(('/' + id));
	}


	updateTask(data){
		return this._http.post(('/update/' + data._id), {name: data.name, cuisine: data.cuisine});
	}

	
	removeTask(id){

		return this._http.get(('/remove/' + id));
	}	


	


};




