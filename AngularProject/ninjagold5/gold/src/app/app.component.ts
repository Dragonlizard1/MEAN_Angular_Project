import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  goldCount: number; 
  constructor(private _httpService: HttpService){}

  ngOnInit(){
  	this.getGoldFromService();
  	this.goldCount = 0;
  };

  farm() {
  	event.preventDefault();

  	// Random Gold amount
  	let gain= Math.floor(Math.random()*4)+2;
  	this.goldCount += gain;
  
  	let observable = this._httpService.setGold({score:this.goldCount});
    observable.subscribe((data:any) => {
      console.log("finish", data);

    });
  };

  getGoldFromService(){
  	let observable = this._httpService.getHome();
  	observable.subscribe(data => {
  		console.log("FUCK YEAH TEXT YES", data);
  	});
  };
}
