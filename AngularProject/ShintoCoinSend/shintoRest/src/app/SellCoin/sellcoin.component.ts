import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sellcoin',
  templateUrl: './sellcoin.component.html',
  styleUrls: ['./sellcoin.component.css']
})
export class sellcoinComponent implements OnInit {
  value1:any;
  ShintoValue: number;
  ShintoOwned: number;
  message1: string;
  showmessage: boolean;

  constructor(private _ShintoService: HttpService) { }

  ngOnInit() {
    this.ShintoValue = this._ShintoService.valuecoin;
    this.ShintoOwned = this._ShintoService.shintocoin;
    this.showmessage = false;
    
  }

    onButtonClickSellCoin()
  {
    if (this.ShintoOwned > Number(this.value1))
    {
      this._ShintoService.sellShinto(this.value1);
      this.ShintoValue = this._ShintoService.valuecoin;
      this.ShintoOwned = this._ShintoService.shintocoin;
      this.showmessage = false;
    }
    else if (Number(this.value1) <= 0)
    {
      this.message1 = "Invalid Number to sell.";
      this.showmessage = true;
    }
    else
    {
      this.message1 = "Can't sell more than you have.";
      this.showmessage = true;
    }
  }
}
