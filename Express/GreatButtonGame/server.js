
var express = require("express");

var path = require("path");

var session = require('express-session');

var app = express();

app.use(session({secret: 'codingdojorocks1'})); 

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

 res.render("index");
})




var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

var count1= 0

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
 
	socket.on( "button_clicked", function (){
	    count1++;
	    console.log(count1);
	    io.emit( 'server_response', {count1 : count1});
	});

	socket.on( "initial1", function (){
		
	    console.log("initial run");
	    socket.emit( 'server_response', {count1 : count1});
	});

	socket.on( "reset1", function (){
		
	    count1 = 0;
	    io.emit( 'server_response', {count1 : count1});
	});


 
})
