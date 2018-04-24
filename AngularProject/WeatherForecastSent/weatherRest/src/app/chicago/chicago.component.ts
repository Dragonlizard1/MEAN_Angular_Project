import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ChicagoService } from './chicago.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
	data1:any;

  constructor(private _httpService: ChicagoService) { }

  ngOnInit() {
  	this.chicagoFind();
  }

    chicagoFind()
  {
  	   let observable = this._httpService.ChicagoTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }
}
