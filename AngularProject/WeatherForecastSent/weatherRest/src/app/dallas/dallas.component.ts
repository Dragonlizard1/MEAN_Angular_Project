import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DallasService } from './dallas.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	data1:any;

  constructor(private _httpService: DallasService) { }

  ngOnInit() {

  	this.dallasFind();

  }

  dallasFind()
  {
  	   let observable = this._httpService.DallasTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }

}