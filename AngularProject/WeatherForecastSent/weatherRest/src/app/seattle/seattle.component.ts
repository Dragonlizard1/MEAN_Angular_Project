import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SeattleService } from './seattle.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	data1:any;

  constructor(private _httpService: SeattleService) { }

  ngOnInit() {

  	this.seattleFind();

  }

  seattleFind()
  {
  	   let observable = this._httpService.SeattleTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }

}
