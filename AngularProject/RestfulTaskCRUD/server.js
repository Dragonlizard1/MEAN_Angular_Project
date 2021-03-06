var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

//-----mongoose db addin:
var mongoose = require('mongoose');

app.use(express.static( __dirname + '/my-angular-app/dist' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.use(express.static( __dirname + '/RestTask/dist' )); //modifiy for the angular project

//---------------------Database Table
mongoose.connect('mongodb://localhost/RestfulTaskAPI');


var BookSchema = new mongoose.Schema({
 title: {type:String, required: true},
 description: {type:String, default:""},
 completed: {type: Boolean, default: false},
},{timestamps:true});



//------------Model
mongoose.model('Books', BookSchema); 
var BookTable = mongoose.model('Books') ;

// We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//----------------Routes  -----------
//--------------------------------------
//--------------------------------

app.get('/', function(req, res) {
 res.json({message: "Start Up database"});
});


app.get('/tasks', function(req, res) {

  BookTable.find({}, function(err,books)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data: books});
        }
    });
});

app.post("/new", function(req, res) {
  console.log(req.body, "req.body stuff");
   var book1 = new BookTable(req.body);

  //info:  req.body has the variable in dictionary from the angular.
  // it must match dictionary key to the table key.

   //{title: req.body.title, 
  //   description: req.body.description,
  //  // completed: req.body.completed
  // });
 
  book1.save(function(err,status)
  {
    if(err){
         console.log("Returned error", err);
         
     res.json({message: "Error", error: err});
    }
    else {
              
       res.json({message: "Success Save"});
    }
  });
});

app.get("/remove/:id", function(req, res) {

  BookTable.remove({_id: req.params.id}, function(err, status)
  {
    if(err){
       console.log("Returned error", err);
            // respond with JSON
       res.json({message: "Error", error: err});
      }
      else {
            // respond with JSON
         res.json({message: "Task for removal finish"});
      }
  });
});




app.get('/:id', function(req, res) {

  BookTable.find({_id: req.params.id}, function(err,book)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Found Book", data: book});
        }

    });
});

app.post('/update/:id', function(req, res) {

  BookTable.update({_id: req.params.id}, req.body, function(err,book)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Success Update", data: book});
        }

    });
});




app.listen(8000, function() {
 console.log("listening on port 8000");
});
