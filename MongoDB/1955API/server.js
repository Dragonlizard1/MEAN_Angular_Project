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
mongoose.connect('mongodb://localhost/namelist');


var NameSchema = new mongoose.Schema({
 name: String,
 born: Date
},{timestamps:true});



//------------Model
mongoose.model('Names', NameSchema); 
var NameTable = mongoose.model('Names') ;

// We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;

//----------------Routes  -----------
//--------------------------------------
//--------------------------------
const bodyParser = require('body-parser');
// configure body-parser to read JSON
app.use(bodyParser.json());

app.get('/', function(req, res) {

  NameTable.find({born:new Date(1955)}, function(err,users)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: users});
        }

    });
});

app.get("/new/:name", function(req, res) {

  var user = new NameTable({name: req.params.name});

  user.save(function(err,status)
  {
    if(err){
         console.log("Returned error", err);
              // respond with JSON
     res.json({message: "Error", error: err});
    }
    else {
              // respond with JSON
       res.json({message: "Success"});
    }
  });
});

app.get("/remove/:name", function(req, res) {

  NameTable.remove({name: req.params.name}, function(err, status)
  {
    if(err){
       console.log("Returned error", err);
            // respond with JSON
       res.json({message: "Error", error: err});
      }
      else {
            // respond with JSON
         res.json({message: "Success"});
      }
  });
});


app.get('/:name', function(req, res) {

  NameTable.find({name: req.params.name}, function(err,users)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: users});
        }

    });
});




app.listen(8000, function() {
 console.log("listening on port 8000");
});
