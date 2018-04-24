import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class editdataComponent implements OnInit {
	infodata: any;
    message: any = "";

  constructor(private _RestService: HttpService,
      private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
      this.infodata = {
    _id: "",
    name: "",
    quantity:"",
    price:""
    }
 
      this.GetSingleData();
   }

   GetSingleData()
  {
    this._route.params.subscribe((params: Params) => {

    

    
      console.log(params["id"], "id");
      this.infodata =  this._RestService.datalist[params["id"] -1];
      console.log(this.infodata);
    });
  }

  onButtonClickSubmit(){
    let observable = this._RestService.updateTask(this.infodata);
      observable.subscribe((data: any) => {

       if (data.error)
      {
        if (data.error.code == 11000)
        {
          this.message = {name: {message : "Duplication of name not allowed."}};
          console.log(this.message);
        }
        else{
         this.message = data.error.errors;
        }
        
      }
      else
        {this._router.navigate(['']);}
 
      });
  }

}
