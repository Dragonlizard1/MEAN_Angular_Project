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
		
	mineShinto()
	{
		this.shintocoin += this.minecoin;
		this.minecoin ++;

		let transaction_message = {
			"message":"Mined 1 Shinto Coin",
			"action": "Mined",
			"amount": 1,
			"value": this.valuecoin,
		};
		this.transactionlist.push(transaction_message);
	}

	buyShinto(num)
	{
		for (let i = 0; i <num; i++)
		{
			this.shintocoin += this.valuecoin;
			this.valuecoin ++;
		}
		let transaction_message = {
			"message":"Bought "+ num +" Shinto Coin",
			"action": "Buy",
			"amount": num,
			"value": (this.valuecoin-1),
		};
		this.transactionlist.push(transaction_message);
	}

	sellShinto(num)
	{
		for (let i = 0; i <num; i++)
		{
			this.shintocoin -= this.valuecoin;
			this.valuecoin --;
		}
		let transaction_message = {
			"message":"Sold "+ num +" Shinto Coin",
			"action": "Sell",
			"amount": num,
			"value": (this.valuecoin-1),
		};
		this.transactionlist.push(transaction_message);
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




