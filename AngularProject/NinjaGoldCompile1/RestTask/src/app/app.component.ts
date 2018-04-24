import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	 gold: number;
     eventLog: any[];
     NameUser: string;
     showLogin: boolean;
     showNinjaGold: boolean;

    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit()
    {
      this.gold = 0;
      this.showLogin=true;
      this.showNinjaGold = false;
      this.eventLog =[];
      // this.newTask = {title:"", description: ""};
      // this.update1Task = {title:"", description: "", completed: false};
     //this.getTasksFromService();
    }

    onSubmitName(){
      let observable = this._httpService.addTask({name:this.NameUser});
      observable.subscribe((data: any) => {
        console.log(this.NameUser);
        this.showLogin=false;
        this.showNinjaGold = true;
    });
  }

    onSubmitFarm()
    {
      let rand = Math.floor((Math.random()*4)+2);
      this.gold += rand;
      let event = "You gained " + rand + " gold from the farm";
      this.eventLog.push(event);
    }
    onSubmitCave(){
      let rand = Math.floor((Math.random()*6)+5);
      this.gold += rand;
      let event = "You gained " + rand + " gold from the cave";
      this.eventLog.push(event);
    }
    onSubmitHouse(){
      let rand = Math.floor((Math.random()*9)+7);
      this.gold += rand;
      let event = "You gained " + rand + " gold from the house";
      this.eventLog.push(event);
    }
    onSubmitCasino() {
      //earn or lose up to 100
      let rand = Math.floor((Math.random()*201-100));
      this.gold += rand;

      if (rand<0){
        let event = "You lost " + rand + " gold from the casino";
        this.eventLog.push(event);
      }
      else if (rand>0){
        let event = "You gained " + rand + " gold from the casino";
        this.eventLog.push(event);
      }
      else{
        let event = "You broke even at the casino";
        this.eventLog.push(event);
      }


      
    }
    
    onSubmitReset() {
        this.gold=0;
        this.eventLog=[];
    }

    // getTasksFromService()
    // {
    // 	let observable = this._httpService.getTasks();
    //   observable.subscribe((data: any) => {
    //   	   let list1 = [];
    //   		this.data1 = data.data;
      	
    //       for (let i = 0; i < this.data1.length; i++)
    //       {
    //         list1.push(this.data1[i]._id);

    //       }
    //       this.listarr = list1;


    // 		});

    // };

    // onSubmit(): void{
    //   let observable = this._httpService.addTask(this.newTask);
    //   observable.subscribe((data: any) => {
    //     console.log("receive data", data);
    //     this.newTask = {title:"", description: ""};
    //     this.getTasksFromService();
    //     });


    // };

    // onButtonClickEdit(i): void { 
    //   this.index1 = Number(i) ;
  
    //   this.showedit = true;
    //   this.showdelete = false;
    //   this.showmessage = false;

    //   this.data2 = this.data1[this.index1];

    //   this.update1Task.title = this.data2.title ;
    //   this.update1Task.description = this.data2.description ;
    //   this.update1Task.completed = this.data2.completed ;
       
    // };

    // onButtonClickEdit2(i): void { 
    //   i = this.data1[i]._id;
    //   let observable = this._httpService.updateTask(i, this.update1Task);
    //   observable.subscribe((data: any) => {
    //     console.log("receive data", data);
    
    //     this.showedit = false;
       
    //     this.data2 = this.data1[this.index1];

    //     this.getTasksFromService();
    //     this.message1 = "Update Successfully!";
    //     this.showmessage = true;
    //     });

    //   };

    // onButtonClickDelete(i): void { 
    //   this.index1 = Number(i);
    //   this.showdelete = true;
    //   this.showedit = false;
    //   this.showmessage = false;

    //   this.data2 = this.data1[this.index1];
       
  

    // };

    // onButtonClickDelete2(i): void { 
    //   i = this.data1[i]._id;
    //   let observable = this._httpService.removeTask(i);
    //   observable.subscribe((data: any) => {
    //     console.log("receive data", data);
     
    //     this.showdelete = false;
       
    //     this.data2 = this.data1[this.index1];

    //     this.getTasksFromService();
    //     this.message1 = "Remove Successfully!";
    //     this.showmessage = true;
    //     });
    // };

    // onButtonClickFind(): void { 
    //   this.getTasksFromService();
       
    // };

}

 
    
  

