es6 javascript
processing3  a java program

let firstName = "Oscar";
let lastName = "Vazquez";
let message = `Hello, my name is ${firstName} ${lastName}`;
// Take note of the backticks instead of quotes
console.log(message);

instead of var  it uses let as var repacement

let x = [1, 2, 3];
if(x.constructor === Array){

	identify a array  

for(let i = 0; i < 7; i++){
    console.log('hello');
};

for loop setup 1:

for (let i = 0; i <num; i++)
{
	
}

continue 
or break 
for loops.

self invoking function see the parentheseis scoping

	(function(){
    console.log("Hello world!");
})();

*ngFor="let data1 of datalist; let i = index"


the arrow function is scope to be immediate with no name.

let sayName4 = (name) => { console.log("Hello my name is " + name) };
sayName4("Dolores");

--------
DOM  manipulation -- which is page manipulation of target

<script>
    let x = document.getElementById("message").innerHTML; 
    console.log(x);
</script>   

let x = document.getElementById("message").innerHTML;

information into the DOM.

<html>
<body>
    <div id="message">
        Hello World!
    </div> 
<script>
    document.getElementById("message").innerHTML = "I love JavaScript!";
</script>   
</body>
</html>

--------------
create element 

<body>
    <ol id="fruit">
        <li>Bananas</li>
        <li>Oranges</li>
        <li>Apples</li>
    </ol>
<script>
    let new_fruit = document.createElement("li");
    // create an empty li
    new_fruit.innerHTML = "Pears";
    // modify its innerHTML content with a string
    document.getElementById("fruit").appendChild(new_fruit);
    // append our new DOM element to the id 'fruit'
</script>   
</body>

----------
class use extends as inheritance
and use super  to inherit the variable; like init;

// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}


get getter and setter limit to setting or altering.

    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
-------

function for es6

static getHelp()
{
}


---------Window.localStorage
The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().

localStorage.setItem('myCat', 'Tom');
The syntax for reading the localStorage item is as follows:

var cat = localStorage.getItem("myCat");
The syntax for removing the localStorage item is as follows:

localStorage.removeItem("myCat");

 
 	<script src = "weather_javascr.js">
 	</script>

 	 <button id = "weather_button">Search Weather</button>


------express for every folder file
npm install express

--- for json package express
navigate to that folder using your terminal/command-prompt/bash.
in terminal/command-prompt/bash type npm init -y
this command basically says: we are using this folder for an npm based project,
 (npm init), the (-y) says fill the package.json with the base information.

create project folder... then inside  --->
npm init -y
npm install express --save
npm install ejs --save
npm install path --save
npm install app --save
npm install body-parser --save
npm install express-session --save
npm install socket.io --save
npm install mongoose --save
npm install bcrypt-as-promised  --save 

https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
password validation method.

app.use(session({
	secret:  "",
	proxy: true,
	resave: false,
	saveUnitialized:true
}));


--- in html

<%   %>  us for logic and for loop
<%=   %> for output of users.name or output placer.

example for loop
    <% for (var x in users) { %>
        <h3>Name: <%= users[x].name %></h3>
        <h4>Email: <%= users[x].email %></h4>
        <hr>
    <% } %>


    io.sockets.on( 'connection', function (socket) {
    //  EMIT:
    socket.emit( 'my_emit_event');
    //  BROADCAST:
    socket.broadcast.emit( "my_broadcast_event");
    //  FULL BROADCAST:
    io.emit( "my_full_broadcast_event");
})


click event  in view file
then socket.on in server
then socket.on in view vile.

---------  preformat data.

  console.log('%s %s is a %s.', person.name.first, person.name.last,
    person.occupation);



In JavaScript there are methods to create dates, but no native code to format. You can read about Date(). But there are libraries that do. Particularly for me the best library to use it deeply is MomentJS. So you can do something like as: moment().format('dd, d of MMMM')

However, if you do not want to use a library you have access to the following native Date properties:

var now = new Date();

document.write(now.toUTCString() + "<br>")
document.write(now.toTimeString() + "<br>")
 Run code snippetExpand snippet
Date Object some properties

toDateString()  Converts the date portion of a Date object into a readable string
toGMTString()   Deprecated. Use the toUTCString() method instead
toISOString()   Returns the date as a string, using the ISO standard
toJSON()    Returns the date as a string, formatted as a JSON date
toLocaleDateString()    Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()    Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()    Converts a Date object to a string, using locale conventions
toString()  Converts a Date object to a string
toTimeString()  Converts the time portion of a Date object to a string
toUTCString() Converts a Date object to a string, according to universal time

var date = new Date(Date.UTC(2013, 1, 1, 14, 0, 0));  
var options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
};  

document.write(date.toLocaleDateString("en-US"));  
document.write(date.toLocaleTimeString("en-us", options));  

// ---------- to validate   regular expression
var schema = new Schema({
    name: { type: String, validate: /[a-z]/ }
});

function validator (v) {
  return v.length > 5;
};

new Schema({
    name: { type: String, validate: [validator, 'my error type'] }
})

app.get('/', function(req, res) {
 UserAnimal.find({}).sort('-createdAt').exec(function(err,users)
  {
    res.render("index", {list1:users});
  });

});



<% for (var y in list1[x].comment_id) { %>
				<ol>
					<li class = "SecondList">Name: <%=list1[x].comment_id[y].name%></a></li>
					<li class = "SecondList">Message: <%=list1[x].comment_id[y].comment1%></li>
				</ol>
				<%  } %>


date validation
/\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])/