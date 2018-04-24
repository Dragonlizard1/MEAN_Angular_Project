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
mongoose.connect('mongodb://localhost/NinjaGold');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
   logs: [{type: Schema.Types.ObjectId, ref: 'Log'}],
   gold: {type:Number, default: 0},

},{timestamps:true});

var LogSchema = new mongoose.Schema({
 log: {type: Array},
 _user: {type: Schema.Types.ObjectId, ref: "User"}
},{timestamps:true});



//------------Model
mongoose.model('User', UserSchema); 
mongoose.model('Log', LogSchema);
var UserTable = mongoose.model('User') ;
var LogTable = mongoose.model('Log');


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


app.get('/findAll', function(req, res) {

  UserTable.find({}).populate("log").exec(function(err,users)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data: users});
        }
    });
});
//<p *ngIf = "showLogin">

app.post("/new", function(req, res) {
  
   var user1 = new UserTable(req.body);

  //info:  req.body has the variable in dictionary from the angular.
  // it must match dictionary key to the table key.

   //{title: req.body.title, 
  //   description: req.body.description,
  //  // completed: req.body.completed
  // });
  console.log(user1.name)
  user1.save(function(err,status)
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

// app.get("/remove/:id", function(req, res) {

//   BookTable.remove({_id: req.params.id}, function(err, status)
//   {
//     if(err){
//        console.log("Returned error", err);
//             // respond with JSON
//        res.json({message: "Error", error: err});
//       }
//       else {
//             // respond with JSON
//          res.json({message: "Task for removal finish"});
//       }
//   });
// });




// app.get('/:id', function(req, res) {

//   BookTable.find({_id: req.params.id}, function(err,book)
//     {
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err});
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Found Book", data: book});
//         }

//     });
// });

// app.post('/update/:id', function(req, res) {

//   BookTable.update({_id: req.params.id}, req.body, function(err,book)
//     {
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err});
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success Update", data: book});
//         }

//     });
// });




app.listen(8000, function() {
 console.log("listening on port 8000");
});
