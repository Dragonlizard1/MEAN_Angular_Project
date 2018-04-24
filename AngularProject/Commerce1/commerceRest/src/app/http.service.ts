import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
	datalist: any;
    constructor(private _http: HttpClient){
    	
		};

	getallTask(){
		return this._http.get("/getalltask");
	};

	// newreviewTask(id,newtask){
	// 	return this._http.post('/reviewprocess/' + id, newtask);
	// }

	addproductTask(newtask){
    	return this._http.post('/productprocess', newtask);
	};



	getoneTask(id){
		return this._http.get(('/' + id));
	}


	updateTask(data){
		return this._http.post(('/update/' + data._id), {name: data.name, quantity: data.quantity, price:data.price});
	}

	
	removeTask(id){

		return this._http.get(('/remove/' + id));
	}	


	


};




