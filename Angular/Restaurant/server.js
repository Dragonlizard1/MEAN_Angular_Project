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


app.use(express.static( __dirname + '/restaurantRest/dist' )); //modifiy for the angular project

//---------------------Database Table
mongoose.connect('mongodb://localhost/restaurantlist');

var Schema = mongoose.Schema;

var RestaurantSchema = new mongoose.Schema({
 name: {type:String, 
        unique: [true, "Can't register same restaurant name"],
        required: [true, "Can't be blank"],
        minlength: [3, "Minimum of 3 character for the restaurant name."]},
  cuisine: {type:String, 
        required: [true, "Can't be blank"],
        minlength: [3, "Minimum of 3 character for the restaurant name."]},
 review_id: [{type: Schema.Types.ObjectId, ref: 'Reviews'}],

},{timestamps:true});

var ReviewSchema = new mongoose.Schema({
  user: {type:String,
          minlength: [3, "Minimum of 3 character for your name."]},
  description: {type:String,
          minlength: [3, "Minimum of 3 character for your review."]},
  star: {type:Number, default: 0},
  resturant_id: [{type: Schema.Types.ObjectId, ref: 'RestaurantS'}],

},{timestamps:true});


//------------Model
mongoose.model('RestaurantS', RestaurantSchema); 
mongoose.model('Reviews', ReviewSchema); 
var RestaurantTable = mongoose.model('RestaurantS') ;
var ReviewTable = mongoose.model('Reviews') ;

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

  RestaurantTable.find({}).populate("review_id").exec( function(err,restaurantlist)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data: restaurantlist});
        }
    });
});

app.post("/restaurantprocess", function(req, res) {
  
   var restaurant1 = new RestaurantTable(req.body);
 
  restaurant1.save(function(err,status)
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

app.post('/reviewprocess/:id', function (req, res){
  RestaurantTable.findOne({_id: req.params.id}, function(err, restaurant){
         var newReview = new ReviewTable(req.body);
         newReview.restaurant_id = restaurant._id;
         restaurant.review_id.push(newReview);

        
         newReview.save(function(err){
          if (err)  { return res.json({message: "Error", error: err})};

        
               restaurant.save(function(err){
                     if(err) { console.log('Error'); } 
                     else { 
                     
                      res.json({message:"Success Save"}); }
               });
         });
   });
 });

app.get("/remove/:id", function(req, res) {

  RestaurantTable.remove({_id: req.params.id}, function(err, status)
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

app.get("/removequote/:id", function(req, res) {

  ReviewTable.remove({_id: req.params.id}, function(err, status)
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

  RestaurantTable.findOne({_id: req.params.id}).populate("review_id").exec(function(err,author)
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

  RestaurantTable.update({_id: req.params.id}, req.body, {runValidators: true}, function(err,status)
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

// app.post('/voteupdate/:id', function(req, res) {
//   console.log("Before Vote", req.body);
//    console.log("after Vote", req.params.id);
//   ReviewTable.update({_id: req.params.id}, req.body, function(err,status)
//     {
      
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err});
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success Update"});
//         }

//     });
// });




app.listen(8000, function() {
 console.log("listening on port 8000");
});
