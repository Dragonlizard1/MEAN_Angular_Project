import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class newreviewComponent implements OnInit {
  user: string = "";
  review: string = "";
  infodata:any;
  message: any = "";
  stars: any;
  myStar: any;

  constructor(private _route: ActivatedRoute,
   private _router: Router,
    private _RestService: HttpService) { }

  ngOnInit() {
     this.infodata = {
    _id: "",
    name: ""
    };

    this.stars = [
    {number:"1 star", index: 1},
    {number:"2 star", index: 2},
    {number:"3 star", index: 3},
    {number:"4 star", index: 4},
    {number:"5 star", index: 5}

    ]
    this.myStar = "1 star";

    this.getdata();
   
  }

    getdata(){
    this._route.params.subscribe((params: Params) => {
      let observable = this._RestService.getoneTask(params['id']);
      observable.subscribe((data: any) => {

      this.infodata = data.data;
    
      });
    });
  }

  onButtonClickSubmit()
  {

   let number1 = 0;
       for (let i = 0; i < this.stars.length; i ++)
       {
        if (this.stars[i].number == this.myStar)
        {
          number1 = this.stars[i].index;
        } 
       }
  
    let observable = this._RestService.newreviewTask(this.infodata._id,{user: this.user, star: number1, description: this.review});
    observable.subscribe((data: any) => {
      if (data.error)
      {
        this.message = data.error.errors;
        
      }
      else
      {
        this._route.params.subscribe((params: Params) => {
          this._router.navigate(['reviews', params['id']]);});
      }


      });
  
  }

}
