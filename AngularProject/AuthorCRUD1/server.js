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


app.use(express.static( __dirname + '/authorRest/dist' )); //modifiy for the angular project

//---------------------Database Table
mongoose.connect('mongodb://localhost/authorlist');


var AuthorSchema = new mongoose.Schema({
 author: {type:String, required: [true, "Can't be blank"],
  minlength: [3, "Minimum of 3 character password."]},
 description: {type:String, default:""}
},{timestamps:true});



//------------Model
mongoose.model('Authors', AuthorSchema); 
var AuthorTable = mongoose.model('Authors') ;


// Use native promises
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//----------------Routes  -----------
//--------------------------------------
//--------------------------------

// app.get('/', function(req, res) {
//  res.json({message: "Start Up database"});
// });


app.get('/getalltask', function(req, res) {

  AuthorTable.find({}, function(err,authorlist)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data: authorlist});
        }
    });
});

app.post("/newprocess", function(req, res) {
  
   var author1 = new AuthorTable(req.body);
 
  author1.save(function(err,status)
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

  AuthorTable.remove({_id: req.params.id}, function(err, status)
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

  AuthorTable.findOne({_id: req.params.id}, function(err,author)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Found Book", data: author});
        }

    });
});

app.post('/update/:id', function(req, res) {

  AuthorTable.update({_id: req.params.id}, req.body, function(err,book)
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
