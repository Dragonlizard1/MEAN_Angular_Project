import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class reviewlistComponent implements OnInit {
  infodata: any;
  infolist: any;

  constructor(private _RestService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.infodata = {
      _id: "",
      quote_id: ""
    }
    this.infolist =[ {
      user:"",
      description:"",
      star: 1
    }]
    this.getdata();
  }

  getdata(){
    this._route.params.subscribe((params: Params) => {
      let observable = this._RestService.getoneTask(params['id']);
      observable.subscribe((data: any) => {

      this.infodata = data.data;
      this.infolist = this.infodata.review_id;
      
      let newlist1 = [];

      for (let i = 5; i > 0; i--)
      {
        for (let k = 0; k < this.infolist.length; k++)
        {
          if (this.infolist[k].star == i)
          {
            newlist1.push(this.infolist[k]);
          }
        }
      }
      this.infolist = newlist1;
    
      });
    });
  }
}

