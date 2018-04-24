import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browseledger',
  templateUrl: './browseledger.component.html',
  styleUrls: ['./browseledger.component.css']
})
export class browseledgerComponent implements OnInit {
   value1:any;
  ShintoValue: number;
  ShintoOwned: number;
  message1: string;
  showmessage: boolean;
  datalist5: any;

  constructor(private _ShintoService: HttpService) { }

  ngOnInit() {
    this.ShintoValue = this._ShintoService.valuecoin;
    this.ShintoOwned = this._ShintoService.shintocoin;
    this.datalist5 = this._ShintoService.transactionlist;

  }

    onButtonClickBuyCoin()
  {

    this._ShintoService.buyShinto(this.value1);
    this.ShintoValue = this._ShintoService.valuecoin;
    this.ShintoOwned = this._ShintoService.shintocoin;
  }

  onButtonClickShowLedge(id)
  {
    console.log(id);
  }
}
