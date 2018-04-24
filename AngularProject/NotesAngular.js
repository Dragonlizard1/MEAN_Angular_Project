to run server
nodemon server.js

ng new myFirstAngularApp

ng generate component foldercreate    // create the folder in the app folder and its component.

// run with node server.
ng build --watch 

file need in server.js file
app.use(express.static( __dirname + '/my-angular-app/dist' ));

// run by itself angular
ng serve --open  //auto open the browser server running.


ng g s http   // install  http file in angular side for http

ng new appname --routing   //to install routing information

http add ---- inside app.module.ts
//-----add
import { HttpService } from './http.service'; 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
   ...
    providers: [HttpService],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   ...
})


//-------add in http.service.ts
import { HttpClient } from '@angular/common/http';
export class HttpService {
    constructor(private _http: HttpClient){}
}


//-----add in app.component.ts
import { HttpService } from './http.service';
export class AppComponent {
   title = 'app';
   constructor(private _httpService: HttpService){}
 }


image files need to be save in assets folder.
favicon need to be save in asset folder with name as favicon.png
and modify angular-cli.json for the favicon.

<h3>{{str}}</h3>
<input type="text" [value]="first_name" />

//-----for the single  tag need *ngFor
<h3 *ngFor="let isdata of data1"> Title:{{isdata.title}}</h3>


///------- this is for ng-template tag  ngFot is no *
<ng-template ngFor let-isdata [ngForOf]="data1">

<h3 >Title: {{isdata.title}} </h3>
<h3 >Title: {{isdata.descriptiont}} </h3>
<h3 >Title: {{isdata.completed}} </h3>
</ng-template>

//-----another example
<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
  <li>...</li>
</ng-template>


<button (click)="onButtonClick()" >Click me!</button>
<button (click)="onButtonClickParam(5)">Click me!</button>
<button (click)="onButtonClickParams(5, 'hello')">Click me!</button>
<button (click)="onButtonClickEvent($event)">Click me!</button>


<div style="text-align:center">
  <ng-template ngFor let-isdata [ngForOf]="data1">

<h2 >Title: {{isdata.title}} </h2>
<h3 >Description: {{isdata.description}} </h3>
<h3 >Completed: {{isdata.completed}} </h3>
</ng-template>
</div>

/// display the info of dictionary in json show object
    <p> {{ newTask |json }} </p>



retrieve data in from api
data.json()   ///to parse the data.

to secure the api information security.
CORS
CSRF

$event  for action function(){}//  a debugging things in window object action.

to set attribute in tag for angular
tag [value] = "variable"

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

//routing
 this._router.navigate(['']);

//constructor route
 private _route: ActivatedRoute, private _router: Router


 npm install -g yarn
 // then can install yarn is a prepackage installation to install faster in cache.
 yarn

 //nesting path
 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskShowComponent } from './task/task-show/task-show.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: TaskComponent, children: [
       { path: '', pathMatch: 'full', component: TaskListComponent }
    ]},
    { path: 'task', component: TaskComponent, children: [
        {path: '', pathMatch: 'full', component: TaskListComponent },
        { path: 'new', component: TaskNewComponent },
        { path: ':id', component: TaskShowComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


ps ax | grep mongod

sudo kill {{pid}}

sudo pm2 stop 0
sudo pm2 start mongod

sudo service nginx stop
sudo service nginx start

