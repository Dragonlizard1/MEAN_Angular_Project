import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-minecoin',
  templateUrl: './minecoin.component.html',
  styleUrls: ['./minecoin.component.css']
})
export class minecoinComponent implements OnInit {
	FibonacciAnswer:any;
  MinecoinNum: number;
  message1: string;
  showmessage: boolean;

  constructor(private _ShintoService: HttpService) { }

  ngOnInit() {
    
    this.MinecoinNum = 1;
    this.showmessage = false;
  }

  onButtonClickMineCoin()
  {

    if (this.FibonacciAnswer == 1)
    {

      this._ShintoService.mineShinto();
      

      this.message1 = "Minecoin has increased to " + this._ShintoService.minecoin + " ShintoCoin: " + this._ShintoService.shintocoin;
      this.showmessage = true;
      this.FibonacciAnswer ="";

    }
    else
    {
      this.message1 = "Answer is wrong";
      this.showmessage = true;
    }

  }

}
