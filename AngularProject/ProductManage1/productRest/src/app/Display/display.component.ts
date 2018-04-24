import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class displayComponent implements OnInit {
  infodata: any;

  constructor(private _ProductService: HttpService,
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {

    this.getdata();
  }

  getdata(){

  	let observable = this._ProductService.getallTask();
    observable.subscribe((data: any) => {

	   this.infodata = data.data;


    });
  }

  onButtonClickDelete(id)
  {
  	let observable = this._ProductService.removeTask(id);
    observable.subscribe((data: any) => {


    this.getdata();

    });
  }

  onButtonClickEdit(id)
  {


    this._router.navigate(['/products/edit/'+ this.infodata[id]._id]);
  }
}
