import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'MEAN';
   getStart : number = 1;
   getEnd: number = 1;
   index1:number = 0;
   howManyTimes:number = 5;

   constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _http: HttpClient){}

   ngOnInit(){

   }
   renavigate()
   {
   	  this._router.navigate('https://www.pokemon.com/us/');
   }
 

   getPoke()
   {
   	 let observable =  this._httpService.getPoke();
	   	observable.subscribe((data:any) =>{
	   		console.log(data.data, "retrieve server evee");

	   	});
   }

   ServerMoveGetButton()
   {
    let observable =  this._httpService.ServerMoveTask({num1: this.getStart});
    	observable.subscribe((data:any) =>{
	   		//console.log(data.message, "Server action", data.num1);
	   			if (data.data){
	   		console.log(data.data, "server pokemon", this.getStart);
	   		
	 	  	}
	 	  	else if (data.message)
	 	  	{
	 	  		console.log(data.message, this.getStart);
	 	  	}

	 	  	if (data.num1)
	 	  	{
	 	  		this.getStart = data.num1;
	 	  	}
	   		if (this.getStart<this.getEnd){
	   			this.ServerMoveGetButton();
	   		}

	   	});
	}

	ServerPokemonGetButton()
   {
    let observable =  this._httpService.ServerPokemonTask({num1: this.getStart});
    	observable.subscribe((data:any) =>{
	   		//console.log(data.message, "Server action", data.num1);
	   		if (data.data){
	   		console.log(data.data, "server pokemon", this.getStart);
	   		
	 	  	}
	 	  	else if (data.message)
	 	  	{
	 	  		console.log(data.message, this.getStart);
	 	  	}

	 	  	if (data.num1)
	 	  	{
	 	  		this.getStart = data.num1;
	 	  	}
	   		if (this.getStart<this.getEnd){
	   			this.ServerPokemonGetButton();
	   		}

	   	});
	}

	FindServerPokemonGetButton()
   {
    let observable =  this._httpService.FindServerPokemonTask();
    	observable.subscribe((data:any) =>{
	   		//console.log(data.message, "Server action", data.num1);

	   		console.log(data.data, "Find pokemon");
	   		this.getStart = data.data[data.data.length-1].id + 1;
	   		//this.getStart = data.num1;

	   	});
	}



	

	


   test()
   {

   	// let observable =  this._http.get('https://pokeapi.co/api/v2/pokedex');
   	// observable.subscribe((data:any) =>{
   	// 	console.log(data, "apidata");
   	// });

   	// console.log(this.getStart);
   	// console.log(this.getEnd,"end")
   

	  // for (let i = 0; i<5; i++)
	  //  {
	  	 let observable =  this._http.get('https://pokeapi.co/api/v2/pokemon/' + this.getStart);
	   	observable.subscribe((data:any) =>{
	   		console.log(data, "apidata");
	   		//this.StoreMove(data);
	   	});

	   //	this.getStart++;
		

	 // }

	
	//this.getStart++;
   	// let observable =  this._http.get('https://pokeapi.co/api/v1/move/3');
   	// observable.subscribe((data:any) =>{
   	// 	console.log(data, "apidata");
   	// });

   	//this.GetMoveApi();

   }	

   test3data()
   {
   let observable =  this._http.get('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png');
   	observable.subscribe((data:any) =>{
   		console.log(data, "apidata new assets");
   	});
   }

   writedata()
   {

   }

   runGet()
   {
   	 
	   	console.log(this.getStart);
	   	this.getStart++;
   }



   StoreMove(datamove)
   {
   		let observable = this._httpService.storeMoveTask({
   			id: datamove.id,
   			accuracy: datamove.accuracy,
   			power: datamove.power,
   			name: datamove.name,
   			ppoint: datamove.pp,
   			description: datamove.description

   		})
   		observable.subscribe((data:any) =>{
   			console.log(data);
   		});
   }

   StoreApi(){
   	let observable = this._httpService.getPokemon()
   	observable.subscribe((data:any) =>{
   		console.log(data, "apidata");

   		let observable = this._httpService.store1Task(data)
   		observable.subscribe((data:any) =>{


   		});

   	});

   }

   GetApi(){

   	let observable = this._httpService.getallTask()
   	observable.subscribe((data:any) =>{

   		console.log(data, "got data from server");
   	});

   }

     GetMoveApi(){

   	let observable = this._httpService.getMoveTask()
   	observable.subscribe((data:any) =>{

   		console.log(data, "storedata in server");
   		this.getStart = data.data[data.data.length-1].id + 1;
   	});

   }

     ButtonScrape(){

   	let observable = this._http.get('http://www.pokemon.com')
   	observable.subscribe((data:any) =>{

   		console.log(data, "data scrape finish in server");
   		 document.getElementById("demo").innerHTML = data;
   	});

   }

 }



