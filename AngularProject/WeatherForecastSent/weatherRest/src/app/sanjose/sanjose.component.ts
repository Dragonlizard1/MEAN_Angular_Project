import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SanJoseService } from './sanjose.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
	data1:any;

  constructor(private _httpService: SanJoseService) { }

  ngOnInit() {

  	this.sanjoseFind();

  }

  sanjoseFind()
  {
  	   let observable = this._httpService.SanJoseTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }

}