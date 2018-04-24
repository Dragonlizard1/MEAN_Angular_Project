import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class editdataComponent implements OnInit {
	infodata: any;
  error1: any;

  constructor(private _ProductService: HttpService,
      private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  this.GetSingleData();
  	this.infodata = {
      title:"",
      price:"",
      image_url:""
    }
  }

   GetSingleData()
  {
    this._route.params.subscribe((params: Params) => {

    

      let observable = this._ProductService.getoneTask(params['id']);
      observable.subscribe((data: any) => {

      this.infodata = data.data;
      });
    });
  }

  onButtonClickSubmit(){
   
    let observable = this._ProductService.updateTask(this.infodata);
      observable.subscribe((data: any) => {
        if (data.error)
        { 
          
          this.error1 = data.error.message;
          console.log(this.error1);
        }
       else
        {this._router.navigate(['']);}
    
      });
  }

}
