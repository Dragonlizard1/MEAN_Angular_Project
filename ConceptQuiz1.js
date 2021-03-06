
1. What technologies are included in the MEAN stack?


1. Which topics from your previous stack(s) will also be covered in the MEAN stack?


1. Which topics in the MEAN stack will be brand new to you?


1. What does this code do?
        <html>
  <body>
               <div id="unicorn"> </div>
    <script>
                function makeUnicorn(){
               let  target = document.getElementById('unicorn');
               target.innerHTML="<p>Unicorns are real!</p>"
             }
             makeUnicorn()
           </script>  
         </body>
       </html>



1. Predict the output: 
var elon = 'super cool';
        function print(){
                var elon = 'only okay';
                console.log(elon);
        }
        console.log(elon);


1. What are classes and object constructors used for?



1. What is ‘this’ referring to in a class?



1. Write a class (using either es5 or es6 syntax) of Car. 
   1. Include 2 attributes. One of them should be the amount of damage done to the car.
   2. Add a method so one car can bump into another, which will increase the amount of damage done to each car.
   3. Invoke your method so one of your instances bumps into the other.



1. Describe the output you expect to see:
        function Foo() {
           const privateMethod = function() {
                 console.log(this);
           }
           this.greet = function() {
                 console.log(“Hello!”);
    privateMethod();
           }
}
const joe = new Foo();
joe.greet();

Node Pre-Quiz
--------------

1. What is a server? List the jobs a server must do, and be as specific as possible.


1. What is Node?


1. What are some benefits of using a Node server?


1. What are some disadvantages of using a Node server?


1. What is NPM and what is its purpose?



Express Pre Quiz
----------------


1. What is Express?


1. What are the benefits of using Express on our projects (vs not using it at all)?


1. What is the purpose of package.json?


1. When should we use Session?


1. Comment each line of code to explain what it is doing:
var express = require('express');
var app = express();


var path = require('path'):
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));


app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.render('index')
})
app.post('/users', function(req, res) {
          console.log(req.body);
  res.redirect('/');
        })
app.listen(8000, function(){
  console.log("Listening on port 8000");
})
________________




Sockets Pre-Quiz
----------------


1. What differences would we notice about a website with sockets vs a website without sockets?


1. How are sockets different from our typical http request and response cycle?


1. Predict the output:
        function foo(a,b,c){
          if(a > 5){
            return c(b(a));
          }
          else {
            return b(c(a));
          }
        }
        var bar = foo(-2, function(a){
          var sum = 1;
          for(var i=a; i>0; i--){
            sum += i;
          }
          return sum;
        }, function(a){
          return a + 5;
        })
        console.log(bar);
1. Roughly how many concurrent connections can one Node server with sockets handle?




1. Without sockets and using the technologies that we’ve already covered, how would you build something like a chat room? Feel free to use diagrams.



MongoDB Pre-Quiz


1. What is MongoDB?


1. What does NoSQL stand for, and how does this change our database design compared to when using SQL?


1. What are some advantages of using a NoSQL database such as MongoDB over SQL databases such as MySQL and Postgres?


1. What are some disadvantages of using a NoSQL database?


1. What do we use the Mongo Shell for?



1. A _________________________________ in MongoDB is like a table in SQL.


1. A _________________________ in MongoDB is like a row or a record in a table in SQL.


Mongoose Pre-Quiz


1. What is Mongoose and what is its purpose?

1. Comment the following code, which is a portion of someone’s server.js file.


mongoose.connect('mongodb://localhost/quoting_dojo');
 
const quoteSchema = new mongoose.Schema({
 name: String,
 quote: String
});


const Quote = mongoose.model('quotes', quoteSchema);


app.get('/quotes', function(req, res) {
 Quote.find({}, function(err, quotes) {
   if (err) { console.log(err); }
   res.render('quotes', { quotes: quotes });
 });
   console.log('Finding quotes');
});


app.post('/quotes', function(req, res) {
 Quote.create(req.body, function(err, result) {
   if (err) { console.log(err); }
   res.redirect('/quotes');
 });
});




1. The above code needs to be improved. As it is now, errors are merely logged in the console. How would you change it so that errors are displayed to the user?


1. Underline the part of the mongoose find command above that is the asynchronous code. How does that code act differently from all the other code around it? 


Angular Pre-Quiz Questions
--------------------------


   1. Draw a basic diagram of the http request and response cycle and indicate where Angular would be located in the cycle. Also, what is Angular’s main responsibility?


   1. The code below is found within <script> tags in an html document and is using jQuery. Explain what it does. This is not a trick question, assume everything loads correctly.


        $(‘button’).click(function(){
          $.get(‘https://pokeapi.co/api/v2/pokemon/1/’, function(data){
            console.log(data);
          }, ‘json’)
        })


   1. From question 2, when the user clicks a button, would there be any change in the browser’s url?


   1. From question 2, how would you display a piece of the incoming data to the user (not in the console, but as a part of the page being viewed)? Indicate where you would write your code with a star in the above snippet.


   1. If we add Angular to one of our recent projects (such as Quoting Dojo or Mongoose Dashboard), which of the following node modules would we no longer need? Check all that apply.


   * express
	   * ejs
	   * mongoose
	   * body-parser
	________________


Angular (Observables, Components, Events) Pre-Quiz

--------------------------------------------------

   1. What is an observable?


   1. Our class file (app.component.ts) has the following:
num: number = 7
What are two ways to display the value of num on our template (app.component.html)? 


   1. What is $event?



   1. What are *ngIf and *ngFor?



   1. Write a function in the class file that logs a message.
        app.component.ts


Complete the code in the template so the function is invoked when the button is clicked.
        app.component.html




        <button (_____________)=”____________________”>Click me!</button>


Angular (Navigation, Routing) Pre-Quiz
--------------------------------------


   1. Assume that we set up our routes successfully so that when we navigate to ‘/alpha’, we see the Alpha component. When we navigate to ‘/beta’, we see the Beta component. We then decide to also set up ‘/alpha’ and ‘/beta’ routes in our server. Explain why this not a good idea.


   1. What is the command to start a new Angular project that is already set up to handle routing? How would you add routing to an existing project that you created without running this command?


   1. Complete the Angular code to submit a form. Assume the post route on the server is behaving as desired.
         

Deployment Pre-Quiz
-------------------


   1. What is the general order of operations for deploying a project (e.g. downloading dependencies, installing dependencies, etc)?


   1. What dependencies are needed on our remote server to run our MEAN project?


   1. What are sites-enabled and sites-available on an AWS NGNX server?


   1. How do we upload our MEAN project onto our remote server?


   1. What is pm2 and why do we use it?


   1. What is ‘service’ as in ‘service mongod start’ and why do we use it?


   1. How can we view the logs from a pm2 instance?


Angular (Navigation, Routing) Review
------------------------------------


   1. What is Angular routing?


   1. How do we start an Angular project that includes routing?


   1. How do Angular routes differ from our Node server routes?


   1. Does angular routing load new full pages or partials? Explain.


   1. Let’s say we’re running our project with one route on the server:
app.get('/tasks', function(req, res){
  Task.find({}, function(err, data){
    if(err){res.json({message: "Error", error: err})}
    else {res.json({message:  "Success", tasks: data})}
  })})
What would we see in our browser if we type localhost:8000/tasks in our navbar and hit enter? 


   1. Building off question 5, let’s say we have an Angular route that looks like this:
{ path: 'new', component: NewComponent }
What would we see if we type localhost:8000/new in our navbar and hit enter?
________________

Express Modularization Pre-Quiz
------------------------------

   1. What is modularization (referring to modularizing an express project)?


   1. What are the benefits of modularizing an express project?



What are the 5 HTTP Verbs and their Purpose


Explain the HTTP Req/Res Cycle


What is a templating engine?