import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {
  infodata: any;

  constructor(private _RestService: HttpService) { }

  ngOnInit() {


    this.getdata();
  }

  getdata(){

  	let observable = this._RestService.getallTask();
    observable.subscribe((data: any) => {
     
    	this.infodata = data.data;
      this._RestService.datalist = data.data;
     
    });
  }

  onButtonClickDelete(id)
  {
    
  	let observable = this._RestService.removeTask(id);
    observable.subscribe((data: any) => {


    this.getdata();

    });
  }
}
