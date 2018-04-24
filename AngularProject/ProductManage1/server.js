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


app.use(express.static( __dirname + '/productRest/dist' )); //modifiy for the angular project

//---------------------Database Table
mongoose.connect('mongodb://localhost/product_manage');


var ProductSchema = new mongoose.Schema({
  title: {type:String, required: [true, "Can't be blank"],
         minlength: [4, "Minimum of 4 character."],
       },
  price: {type:Number, required: [true, "Can't be blank"]},
  image_url: {type:String}
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
           res.json({message: "Retrieve All", data: productlist});
        }
    });
});

app.post("/newprocess", function(req, res) {
  
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

  ProductTable.findOne({_id: req.params.id}, function(err,product)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Found Book", data: product});
        }

    });
});

app.post('/update/:id', function(req, res) {

  ProductTable.update({_id: req.params.id}, req.body, { runValidators: true }, function(err,status)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Success Update", status: status});
        }

    });
});




app.listen(8000, function() {
 console.log("listening on port 8000");
});
