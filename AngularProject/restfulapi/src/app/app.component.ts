import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
});

export class AppComponent implements OnInit{
		title: string;
		description: string;
		completed: boolean;
		other: string;
		data1: any;
    constructor(private _httpService: HttpService){};
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit()
    {
    this.getTasksFromService();


  
     
    };

    getTasksFromService()
    {
    	let observable = this._httpService.getTasks();
      observable.subscribe(data => 
      	{
      	console.log("Got our tasks! data", data.data);
      	this.description = data.data[0].description;
      	console.log(this.description, "description1");
    		this.title = data.data[0].title;
    		
    		this.completed =  data.data[0].completed;
    		this.other = "MEAN";
    		this.data1 = data.data;
    		console.log(this.data1, "data1");
    		});

    }
};
// start1()
// {
// onButtonClick(): void { 
//     console.log(`Click event is working`);
// };
// onButtonClickParam(num: Number): void { 
//     console.log(`Click event is working with num param: ${num}`);
// };
// onButtonClickParams(num: Number, str: String): void { 
//     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
// };
// onButtonClickEvent(event: any): void { 
//     console.log(`Click event is working with event: `, event);
// };
// }