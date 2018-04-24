import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-showledger',
  templateUrl: './showledger.component.html',
  styleUrls: ['./showledger.component.css']
})
export class showledgerComponent implements OnInit {
  data: any;
  id: number;

  constructor(private _ShintoService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.showDisplay();

  }

  showDisplay()
  {
    this._route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.data = this._ShintoService.transactionlist[this.id];
    });
    
  }


}

//   params['id']
