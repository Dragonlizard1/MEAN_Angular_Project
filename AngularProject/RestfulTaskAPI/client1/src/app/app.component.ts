import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onButtonClickParam(num: Number): void { 
        console.log('Click event is working with num param: ${num}');
    }

}


    // function onButtonClickParam(num: Number): void { 
    //     console.log('Click event is working with num param: ${num}');
    // }
