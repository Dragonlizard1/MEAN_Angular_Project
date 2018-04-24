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
  cuisine: string = "";
  message: any = "";

  constructor(private _route: ActivatedRoute, private _router: Router, private _RestService: HttpService) { }

  ngOnInit() {
   
  }

  onButtonClickSubmit()
  {
    let observable = this._RestService.addrestaurantTask({name: this.name, cuisine: this.cuisine});
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
