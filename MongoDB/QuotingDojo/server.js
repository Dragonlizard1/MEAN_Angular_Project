var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

//-----mongoose db addin:
var mongoose = require('mongoose');

app.use(session({secret: 'codingdojorocks1'})); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//---------------------Database Table
mongoose.connect('mongodb://localhost/basic_mongoose');
var QuotingSchema = new mongoose.Schema({
 name: String,
 quotes: String,
 createdAt: {type: Date, default: Date.now}
})


//------------Model
mongoose.model('Quotes', QuotingSchema); // We are setting this Schema in our Models as 'User'
var UserQuote = mongoose.model('Quotes') // We are retrieving this Schema from our Models, named 'User'




// Use native promises
mongoose.Promise = global.Promise;

//----------------Routes


app.get('/', function(req, res) {

 res.render("index");
})


app.post('/process', function(req, res) {

  var user = new UserQuote({name: req.body.name, quotes: req.body.quote1});

  console.log(user, "user recorded")
  user.save()//function(err) {
   
  //   if(err) {
  //     console.log('something went wrong');
  //   } else { 
  //     console.log('successfully added a user!');
  //     res.redirect('/');
  //   }
  // });


  res.redirect('/');
});


app.post('/quote1', function(req, res) {


 res.redirect('/quotes');
});

app.get('/quotes', function(req, res) {
  var list1 = {};
  console.log("quote2");
  UserQuote.find({}, function(err,users)
    {
      
      // user.forEach(function(users){
      //   list1[users._id] = users;
      // });
      console.log(list1, "list1 display");
      console.log("finishs")
     res.render("result", {list1:users});
    });

  // content = {
  //  name1 : req.body.name,
  //  location1: req.body.location,
  //  language1: req.body.language,
  //  comment1 : req.body.comment

  // };
});



// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  res.redirect('/');
// })
// tell the express app to listen on port 8000
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.


app.listen(8000, function() {
 console.log("listening on port 8000");
});
