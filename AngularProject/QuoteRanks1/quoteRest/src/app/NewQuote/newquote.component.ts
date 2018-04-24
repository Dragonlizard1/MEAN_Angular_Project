import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class newquoteComponent implements OnInit {
  quote: string = "";
  infodata:any;
  message: any = "";

  constructor(private _route: ActivatedRoute,
   private _router: Router,
    private _AuthorService: HttpService) { }

  ngOnInit() {
     this.infodata = {
    _id: "",
    author: ""
    };
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

  onButtonClickSubmit()
  {
   
    let observable = this._AuthorService.newquoteTask(this.infodata._id,{quote: this.quote});
    observable.subscribe((data: any) => {
      if (data.error)
      {
        this.message = data.error.errors;
        
      }
      else
      {
        this._route.params.subscribe((params: Params) => {
          this._router.navigate(['quote', params['id']]);});
      }


      });
  
  }

}
