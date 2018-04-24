var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

//-----mongoose db addin:
var mongoose = require('mongoose');

app.use(express.static( __dirname + '/my-angular-app/dist' ));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "./static")));
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');


app.use(express.static( __dirname + '/commerceRest/dist' )); //modifiy for the angular project
require('mongoose-currency').loadType(mongoose);
//---------------------Database Table
mongoose.connect('mongodb://localhost/commercelist1');

var Schema = mongoose.Schema;

var Currency = mongoose.Types.Currency;

var ProductSchema = new mongoose.Schema({
  name: {type:String, 
        unique: [true, "Can't register same restaurant name"],
        required: [true, "Products must contain a Name"],
        minlength: [3, "Minimum of 3 character for the restaurant name."]},
  quantity: {type: Number, 
        required: [true, "Products must contain a Quantity"],
        min: [0, "Must be greater than zero."]},
  price: {type: Number, 
        required: [true, "Products must contain a Price"],
        min: [0, "Must be greater than zero."]},

},{timestamps:true});



//------------Model
mongoose.model('Products', ProductSchema); 
var ProductTable = mongoose.model('Products') ;

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

  ProductTable.find({}, function(err,productlist)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
          console.log("retrieve Task");
           res.json({message: "Retrieve All", data: productlist});
        }
    });
});

app.post("/productprocess", function(req, res) {
  
   var product1 = new ProductTable(req.body);
 
  product1.save(function(err,status)
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

  ProductTable.remove({_id: req.params.id}, function(err, status)
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

  ProductTable.findOne({_id: req.params.id}, function(err,product1)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Found Book", data: product1});
        }

    });
});

app.post('/update/:id', function(req, res) {

  ProductTable.update({_id: req.params.id}, req.body, {runValidators: true}, function(err,status)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Success Update"});
        }

    });
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});
