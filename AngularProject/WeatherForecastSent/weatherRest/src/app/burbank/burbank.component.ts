import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BurbankService } from './burbank.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	data1:any;

  constructor(private _httpService: BurbankService) {
  this.burbankFind()
   }

  ngOnInit() {
  }

  burbankFind()
  {
  	   let observable = this._httpService.BurbankTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }

}
