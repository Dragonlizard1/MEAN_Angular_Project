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
mongoose.connect('mongodb://localhost/mongooseDash');
var UserSchema = new mongoose.Schema({
 name: String,
 animal: String,
 createdAt: {type: Date, default: Date.now}

});


//------------Model
mongoose.model('Users', UserSchema); // We are setting this Schema in our Models as 'User'
var UserAnimal = mongoose.model('Users') // We are retrieving this Schema from our Models, named 'User'




// Use native promises
mongoose.Promise = global.Promise;

//----------------Routes  -----------
//--------------------------------------
//--------------------------------


app.get('/', function(req, res) {
 UserAnimal.find({}).sort('-createdAt').exec(function(err,users)
  {
    res.render("index", {list1:users});
  });

});



app.get('/mongoose/new', function(req, res) {

 res.render("new");
});

//------------------

app.post('/mongoose', function(req, res) {

  var user = new UserAnimal({name: req.body.name, animal: req.body.animal});

  user.save()

  res.redirect('/');
});

//---------------------

app.get('/mongoose/:id', function(req, res) {


UserAnimal.find({_id:req.params.id}, function(err,users)
    {    
      
     res.render("display", {list1:users});
    });

});

//-----------------
app.get('/mongoose/edit/:id', function(req, res) {

  UserAnimal.find({_id:req.params.id}, function(err,users)
    {    
     
     res.render("edit", {list1:users});
    });

});

//----------------
app.post('/mongoose/:id', function(req, res) {

 
  // UserAnimal.findOne({_id:req.params.id}, function(err,doc){
  //   doc.name = req.body.name ;
  //   doc.animal = req.body.animal;
  //   doc.save();
  //   res.redirect("/");
  // });
  UserAnimal.update({_id:req.params.id}, {animal: req.body.animal , name: req.body.name}, function(err, status){
    console.log(status);
    res.redirect("/");
  } );
 
});

app.get('/mongoose/destroy/:id', function(req, res) {

 
  UserAnimal.remove({_id:req.params.id}, function(err, status){
    console.log(status);
    res.redirect("/");
  } );
 
});




app.listen(8000, function() {
 console.log("listening on port 8000");
});
