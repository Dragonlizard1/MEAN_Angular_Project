import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {
  infodata: any;

  constructor(private _AuthorService: HttpService) { }

  ngOnInit() {
    this.infodata = [{
    _id: "",
    author: ""
    }]
    this.getdata();
  }

  getdata(){

  	let observable = this._AuthorService.getallTask();
    observable.subscribe((data: any) => {

	this.infodata = data.data;


    });
  }

  onButtonClickDelete(id)
  {
  	let observable = this._AuthorService.removeTask(id);
    observable.subscribe((data: any) => {


    this.getdata();

    });
  }
}
