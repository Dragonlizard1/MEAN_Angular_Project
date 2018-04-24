import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class quotelistComponent implements OnInit {
  infodata: any;

  constructor(private _AuthorService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.infodata = {
      _id: "",
      quote_id: ""
    }
    this.getdata();
  }

  getdata(){
    this._route.params.subscribe((params: Params) => {
      let observable = this._AuthorService.getoneTask(params['id']);
      observable.subscribe((data: any) => {

      this.infodata = data.data;
     
      });
    });
  }

  onButtonClickVoteUp(quote_id,num)
  {
     num++;
      let observable = this._AuthorService.voteupdateTask(quote_id, num);
      observable.subscribe((data: any) => {

         this.getdata();
 
      });

  }



    onButtonClickVoteDown(quote_id,num)
  {
    num--;
          let observable = this._AuthorService.voteupdateTask(quote_id, num);
      observable.subscribe((data: any) => {

         this.getdata();
 
      });
  }



  onButtonClickDelete(id)
  {
  	let observable = this._AuthorService.removeQuote(id);
    observable.subscribe((data: any) => {


    this.getdata();

    });
  }
}
