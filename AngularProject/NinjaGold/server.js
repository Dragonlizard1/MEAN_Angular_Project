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
mongoose.connect('mongodb://localhost/NinjaGold1');

//var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
   logs: {type: []},
   gold: {type:Number, default: 0},

},{timestamps:true});

// var LogSchema = new mongoose.Schema({
//  log: {type: String},
//  _user: {type: Schema.Types.ObjectId, ref: "User"}
// },{timestamps:true});



//------------Model
mongoose.model('User', UserSchema); 
//mongoose.model('Log', LogSchema);
var UserTable = mongoose.model('User') ;
//var LogTable = mongoose.model('Log');


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

  UserTable.find({}, function(err,users)
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


app.post("/new", function(req, res) {
  UserTable.find({} , function(err,users)
  {
    if (users)
    {
      for (let i = 0; i < users.length; i++)
      {
        if (users[i].name == req.body.name)
        {
          res.json({message: "Found", users: users[i]});
          return;
        }
      }
    }
    
    
    var user1 = new UserTable(req.body);

    
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
});

app.get("/remove/:id", function(req, res) {

  UserTable.remove({_id: req.params.id}, function(err, status)
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

app.post('/update/:id', function(req, res) {

     UserTable.findOne({_id: req.params.id}, function(err, user1){
       
         user1.logs.push(req.body.log);
         user1.gold = req.body.gold;
       
         user1.save(function(err){
               if(err) { res.json({message:'Error'}); } 
               else { res.json({message:"success"}); }
         });
     
   });

});




app.listen(8000, function() {
 console.log("listening on port 8000");
});
