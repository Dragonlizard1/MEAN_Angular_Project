import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buycoin',
  templateUrl: './buycoin.component.html',
  styleUrls: ['./buycoin.component.css']
})
export class buycoinComponent implements OnInit {
	 value1:any;
  ShintoValue: number;
  ShintoOwned: number;
  message1: string;
  showmessage: boolean;

  constructor(private _ShintoService: HttpService) { }

  ngOnInit() {
    this.ShintoValue = this._ShintoService.valuecoin;
    this.ShintoOwned = this._ShintoService.shintocoin;
  	
  }

    onButtonClickBuyCoin()
  {

    this._ShintoService.buyShinto(this.value1);
    this.ShintoValue = this._ShintoService.valuecoin
    this.ShintoOwned = this._ShintoService.shintocoin
  }
}
