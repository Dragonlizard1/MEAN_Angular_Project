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


app.use(express.static( __dirname + '/quoteRest/dist' )); //modifiy for the angular project

//---------------------Database Table
mongoose.connect('mongodb://localhost/authorquotelist');

var Schema = mongoose.Schema;

var AuthorSchema = new mongoose.Schema({
 author: {type:String, required: [true, "Can't be blank"],
          minlength: [3, "Minimum of 3 character password."]},
 quote_id: [{type: Schema.Types.ObjectId, ref: 'Quotes'}],

},{timestamps:true});

var QuoteSchema = new mongoose.Schema({
  quote: {type:String,
          minlength: [3, "Minimum of 3 character password."]},
  vote: {type:Number, default: 0},
  author_id: [{type: Schema.Types.ObjectId, ref: 'Authors'}],

},{timestamps:true});


//------------Model
mongoose.model('Authors', AuthorSchema); 
mongoose.model('Quotes', QuoteSchema); 
var AuthorTable = mongoose.model('Authors') ;
var QuoteTable = mongoose.model('Quotes') ;

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

  AuthorTable.find({}).populate("quote_id").exec( function(err,authorlist)
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

app.post("/authorprocess", function(req, res) {
  
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

app.post('/quoteprocess/:id', function (req, res){
  AuthorTable.findOne({_id: req.params.id}, function(err, author){
         var quote = new QuoteTable(req.body);
         quote.author_id = author._id;
         author.quote_id.push(quote);

        
         quote.save(function(err){
          if (err)  { return res.json({message: "Error", error: err})};

        
               author.save(function(err){
                     if(err) { console.log('Error'); } 
                     else { 
                     
                      res.json({message:"Success Save"}); }
               });
         });
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

app.get("/removequote/:id", function(req, res) {

  QuoteTable.remove({_id: req.params.id}, function(err, status)
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

  AuthorTable.findOne({_id: req.params.id}).populate("quote_id").exec(function(err,author)
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

  AuthorTable.update({_id: req.params.id}, req.body, {runValidators: true}, function(err,status)
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

app.post('/voteupdate/:id', function(req, res) {
  console.log("Before Vote", req.body);
   console.log("after Vote", req.params.id);
  QuoteTable.update({_id: req.params.id}, req.body, function(err,status)
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
