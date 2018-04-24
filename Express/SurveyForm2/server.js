
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


io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);

	socket.on( "form_clicked", function (data){
	    let message = "";
	    message = "You emitted the folowing information to the server: ";
	    message += "</br>Name: " + data.name + "</br>Location: " + data.dojo;
	    message += "</br>Language: " + data.lang + "</br>Comment: " + data.comment + "</br>" ;
	    socket.emit( 'server_response', {message1 : message});
	})

	socket.on( "random_number", function (){
	    let num1 = Math.floor(Math.random() * 100) + 1;
	    let strlist = "";
	    strlist = "</br>Your lucky number emitted by the server is " + String(num1);

	    socket.emit( 'updated_message', {rand_num1 : strlist});
	})
 
})


