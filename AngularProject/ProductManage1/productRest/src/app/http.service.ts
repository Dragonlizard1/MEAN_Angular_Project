import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient){
    	
		};

	addTask(datasend){
    	return this._http.post('/newprocess', datasend);
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
		console.log(data, "in http update");
		return this._http.post(('/update/' + data._id), data);
	}




	
};




