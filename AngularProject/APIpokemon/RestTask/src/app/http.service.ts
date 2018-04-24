import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable()
export class HttpService {
	 constructor(private _http: HttpClient) {
	    this.getPokemon();
	}

	getPokemon(){
		return this._http.get('https://pokeapi.co/api/v2/move/1');
	   // let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
		//let ability1 = this._http.get('https://pokeapi.co/api/v2/ability/65/');
		//bulbasaur.subscribe((data1:any) => console.log("Got our tasks pokemon!", data1));

		// ability1.subscribe((data:any) => {
		// 	console.log("Got our tasks ability!", data);
		// 	console.log("Pokemon List shared same ability: overgrow");
		// 	for (let index = 0; index < data.pokemon.length; index++)
		// 	{

		// 		console.log("Poekmon Name: ", data.pokemon[index].pokemon.name);
		// 	}


		//});  // subscribe end


	} //getPokemon end

	store1Task(newtask){
    	return this._http.post('/new', newtask);
	};

	getallTask(){
		return this._http.get("/tasks");
	};

	getMoveTask(){
		return this._http.get("/movetasks");

	}

	storeMoveTask(movetask)
	{
		return this._http.post('/movedata', movetask);
	}


	ServerMoveTask(moveNum)
	{
		return this._http.post('/getMoveData', moveNum);
	}

	
	ServerPokemonTask(moveNum)
	{
		return this._http.post('/getPokemonData', moveNum);
	}

	FindServerPokemonTask()
	{
		return this._http.get('/pokemongettasks');
	}
	

	getPoke()
	{
		return this._http.get('/getPokemon');
	}

	getScrape()
	{
		return this._http.get('/scrape1');
	}

}; //Export class end




  //  constructor(private _http: HttpClient){
  //   	 this.getTasks();
  //   	};

  //   getTasks(){
  //   // our http response is an Observable, store it in a variable
  //   let tempObservable = this._http.get('/tasks');
  //   // subscribe to the Observable and provide the code we would like to do with our data from the response
  //   tempObservable.subscribe(data => console.log("Got our tasks!", data));
 	// };
