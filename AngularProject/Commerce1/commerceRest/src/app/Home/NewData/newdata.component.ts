import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css']
})
export class newdataComponent implements OnInit {
  name: string = "";
  qty: number ;
  price: number;

   message: any = "";

  constructor(private _route: ActivatedRoute, private _router: Router, private _RestService: HttpService) { }

  ngOnInit() {
   this.message = {
    name:"",
    qty: "",
    price: ""
   }
  }

  onButtonClickSubmit()
  {
    let observable = this._RestService.addproductTask({name: this.name, quantity:this.qty, price: this.price});
    observable.subscribe((data: any) => {
   
      if (data.error)
      {
         
           this.message = data.error.errors;
          
          
        
      }
      else
      {
        this._router.navigate(['']);
      }


    });
  }

}
