import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css']
})
export class newdataComponent implements OnInit {
  AuthorName: string = "";

  constructor(private _route: ActivatedRoute, private _router: Router, private _AuthorService: HttpService) { }

  ngOnInit() {
    
   
  }

  onButtonClickSubmit()
  {
    let observable = this._AuthorService.addTask({author: this.AuthorName});
    observable.subscribe((data: any) => {
      console.log("finish");
      this._router.navigate(['']);


    });
  }

}
