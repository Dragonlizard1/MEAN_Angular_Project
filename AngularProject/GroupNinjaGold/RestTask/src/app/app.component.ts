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
     id1: string;
     leadList: any[];
     //update1Task: any;

    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit()
    {
      this.gold = 0;
      this.showLogin=true;
      this.showNinjaGold = false;
      this.eventLog =[];

    }

    onSubmitName(){
      let observable = this._httpService.addTask({name:this.NameUser});
      observable.subscribe((data: any) => {

        if (data.message == "Found")
        {
            this.gold = data.users.gold;
            this.eventLog = data.users.logs;
            this.id1 = data.users._id;
            console.log("old user", data);
        }
        else
        {
           
            let observable = this._httpService.addTask({name:this.NameUser});
            observable.subscribe((data: any) => {
            this.id1 = data.users._id;
             console.log(data.users._id,"new user");
            });

        }   


        this.showLogin=false;
        this.showNinjaGold = true;
    });
  }

    onSubmitFarm()
    {
      let rand = Math.floor((Math.random()*4)+2);
      this.gold += rand;
      let event1 = "You gained " + rand + " gold from the farm";
      this.eventLog.push(event1);

      let observable = this._httpService.updateTask(this.id1,{log:event1, gold: this.gold});
      observable.subscribe((data: any) => {  });
    }

    onSubmitCave(){
      let rand = Math.floor((Math.random()*6)+5);
      this.gold += rand;
      let event1 = "You gained " + rand + " gold from the cave";
      this.eventLog.push(event1);
     
      let observable = this._httpService.updateTask(this.id1,{log:event1, gold: this.gold});
      observable.subscribe((data: any) => {  });
    }

    onSubmitHouse(){
      let rand = Math.floor((Math.random()*9)+7);
      this.gold += rand;
      let event1 = "You gained " + rand + " gold from the house";
      this.eventLog.push(event1);

      let observable = this._httpService.updateTask(this.id1,{log:event1, gold: this.gold});
      observable.subscribe((data: any) => {  });
    }

    onSubmitCasino() {
      //earn or lose up to 100
      let rand = Math.floor((Math.random()*201)-100);
      this.gold += rand;
      let event1 = "";
      if (rand<0){
        event1 = "You lost " + rand + " gold from the casino";
        console.log(event1,"1", rand);
        this.eventLog.push(event1);
      }
      else if (rand>0){
        event1 = "You gained " + rand + " gold from the casino";
        console.log(event1, "2", rand);
        this.eventLog.push(event1);
      }
      else{
        event1 = "You broke even at the casino";
        console.log(event1, "3");
        this.eventLog.push(event1);
      }
     
      let observable = this._httpService.updateTask(this.id1,{log:event1, gold: this.gold});
      observable.subscribe((data: any) => {  });
      
    }
    
    onSubmitReset() {
      this.gold=0;
      this.eventLog=[];

      let observable = this._httpService.removeTask(this.id1);
       observable.subscribe((data: any) => { 

        this.onSubmitName();
        });
    }


}

 
    
  

