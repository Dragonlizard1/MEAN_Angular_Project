import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DCService } from './dc.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
	data1:any;

  constructor(private _httpService: DCService) { }

  ngOnInit() {

  	this.DCFind();

  }

  DCFind()
  {
  	   let observable = this._httpService.DCTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }

}