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

  constructor(private _AuthorService: HttpService,
      private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  this.GetSingleData();
  	
  }

   GetSingleData()
  {
    this._route.params.subscribe((params: Params) => {

    

      let observable = this._AuthorService.getoneTask(params['id']);
      observable.subscribe((data: any) => {

      this.infodata = data.data;
      });
    });
  }

  onButtonClickSubmit(){
    let observable = this._AuthorService.updateTask(this.infodata);
      observable.subscribe((data: any) => {

         this._router.navigate(['']);
 
      });
  }

}
