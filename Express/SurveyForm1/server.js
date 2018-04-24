
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

app.post('/result', function(req, res) {


	content = {
		name1 : req.body.name,
		location1: req.body.location,
		language1: req.body.language,
		comment1 : req.body.comment

	};
 res.render("result", content);
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
