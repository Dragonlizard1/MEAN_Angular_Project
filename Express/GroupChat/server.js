
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


//function----------------------------

app.get('/', function(req, res) {

 res.render("index");
})


//io socket -------------------------

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

//special variable-------------------
var messageholder= [];

//------------------------------------

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
 
	socket.on( "send_message", function (data){
	    let strlist = "";
	    strlist += "<p>" + data.name + " : " + data.message + "</p>";
	   	messageholder.push(strlist);
	    io.emit( 'server_response', {out_message : strlist});
	});

	socket.on( "initial1", function (){
		
	    socket.emit( 'initial2', {out_message : messageholder});
	});

 
})
