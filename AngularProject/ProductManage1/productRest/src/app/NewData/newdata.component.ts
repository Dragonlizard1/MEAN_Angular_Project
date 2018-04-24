import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css']
})
export class newdataComponent implements OnInit {
  ProductName: string = "";
  Price: Number;
  Imageurl: string = "";

  constructor(private _route: ActivatedRoute, private _router: Router, private _ProductService: HttpService) { }

  ngOnInit() {
    
   
  }

  onButtonClickSubmit()
  {
    let datasend = {
      title: this.ProductName, 
      price: this.Price,
      image_url: this.Imageurl
    };
    let observable = this._ProductService.addTask(datasend);
    observable.subscribe((data: any) => {
      console.log("finish");
      this._router.navigate(['']);


    });
  }

}
