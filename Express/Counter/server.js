
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
	if (req.session.count)
	{
		req.session.count++;
	
	}
	else
	{
		req.session.count = 1;
	}
 res.render("index", {count : req.session.count});
})

app.get('/plus2', function(req, res) {

		req.session.count++;
	
 res.redirect('/');
})

app.get('/reset', function(req, res) {

		req.session.count = 0;
	
 res.redirect('/');
})

// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  res.redirect('/');
// })
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
