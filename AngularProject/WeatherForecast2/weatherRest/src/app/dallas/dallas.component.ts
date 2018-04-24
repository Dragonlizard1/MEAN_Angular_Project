import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DallasService } from './dallas.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	data1:any;
  search1:string = "";

  constructor(private _httpService: DallasService) { }

  ngOnInit() {

  	this.dallasFind();

  }

  dallasFind()
  {
  	   let observable = this._httpService.DallasTask();
      	observable.subscribe((data: any) => {
		//var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
         this.data1 = data;
          console.log(this.data1,"what is it");

      });

  }

  videofind()
  {
     let observable = this._httpService.find1Task(this.search1);
    observable.subscribe((res: any) => {
            // load up any gif you want, this will be shown while user is waiting for response
            // $.post(
            //     $(this).attr('action'),
            //     $(this).serialize( ),
               
                    // pay careful attention to the response object
                    console.log('the response object:');
                    console.log(res);
                //     var html_string = "";
                //     if (res.results.length !== 0) {
                //         html_string = "<video controls src='" + res.results[0].previewUrl + "'></video>";
                //     }
                //     else {
                //         html_string = "Not Found";
                //     }
                //     console.log('the html string:');
                //     console.log(html_string);
                // });
            // don't forget this 'false' -- without it, the 'submit' cycle will continue, and the page will refresh
        //     return false;
         });
            
  };

}