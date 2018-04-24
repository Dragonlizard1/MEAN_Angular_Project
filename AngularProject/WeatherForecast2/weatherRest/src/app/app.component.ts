import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	// find_data: any;


    constructor(private _route: ActivatedRoute, private _router: Router){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit()
    {
    	 //this._route.params.subscribe((params: Params) => console.log(params['id']));
      // this.newTask = {title:"", description: ""};
      // this.update1Task = {title:"", description: "", completed: false};
     //this.getTasksFromService();
    };

  //   Seattle2(){
  //    let observable = this._httpService.Task1();
  //     	observable.subscribe((data: any) => {
    
		// //var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
  //        this.data1 = data.json();
  //         console.log(this.data, "what is it");
  //       });
  //     };//

   //  goHome() {
   //  this._router.navigate(['/home']);
  	// }
  }
