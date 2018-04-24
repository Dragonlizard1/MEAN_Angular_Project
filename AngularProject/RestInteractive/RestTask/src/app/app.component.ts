import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
		find_data: any;
		data1: any;
    data2: any;
    listarr: any[];
    find_num: any;
    index1: number;
    show: boolean = false;

    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit()
    {
     //this.getTasksFromService();

   
    // onButtonClickParams(num: Number, str: String): void { 
    //     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
    // },
    // onButtonClickEvent(event: any): void { 
    //     console.log(`Click event is working with event: `, event);
    // },
     // this.startup();
     
    }

    getTasksFromService()
    {
    	let observable = this._httpService.getTasks();
      observable.subscribe(data => 
      	{
      	   let list1 = [];
      		this.data1 = data.data;
      		console.log(this.data1, "data1");
          for (let i = 0; i < this.data1.length; i++)
          {
            list1.push(this.data1[i]._id);

          }
          this.listarr = list1;


    		});

    };

    onButtonClick(): void { 
      this.getTasksFromService();
       
    };

    onButtonClick2(): void { 
      //let idnum = $("task_id").val();
      
      this.index1 = Number(this.find_num) - 1;
      this.find_num = "";
    
      this.show = true;
     
      this.data2 = this.data1[this.index1]
      console.log("data1", this.data2);
       
    }

 


}

 
    
  

