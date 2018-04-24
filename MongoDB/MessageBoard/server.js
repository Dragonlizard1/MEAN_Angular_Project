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
mongoose.connect('mongodb://localhost/MessageBoard');

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
 name: {type:String, minglength: 4},
 message1: String,
 comment_id: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
},{timestamps:true});

var CommentSchema = new mongoose.Schema({
 name: {type:String, minglength: 4},
 comment1: String,
 _message_id: {type: Schema.Types.ObjectId, ref: 'Messages'},
},{timestamps:true});

//------------Model
mongoose.model('Messages', MessageSchema); 
mongoose.model('Comments', CommentSchema);// We are setting this Schema in our Models as 'User'
var MessageTable = mongoose.model('Messages') ;
var CommentTable = mongoose.model('Comments') ;



// We are retrieving this Schema from our Models, named 'User'




// Use native promises
mongoose.Promise = global.Promise;

//----------------Routes  -----------
//--------------------------------------
//--------------------------------


app.get('/', function(req, res) {


 MessageTable.find({}).populate("comment_id").exec( function(err,users)
    {
    	//console.log( " message = ", users[0].name);
    	console.log("otherdata", users[0].comment_id[0].name,)
     res.render("index", {list1:users});
     });

});

// app.get('/posts/:id', function (req, res){
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });

app.post('/processmessage', function(req, res) {

  var user = new MessageTable({name: req.body.name_message, message1: req.body.message});

  user.save()

  res.redirect('/');
});

app.post('/processcomment/:id', function (req, res){
  MessageTable.findOne({_id: req.params.id}, function(err, message_list){
         var comment = new CommentTable({name:req.body.name_comment , comment1: req.body.comment});
         comment._message_id = message_list._id;
         message_list.comment_id.push(comment);
         comment.save(function(err){
                 message_list.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
         });
   });
 });

//--------------------------------------

// app.get('/posts/:id', function (req, res){
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });

// app.post('/posts/:id', function (req, res){
//   Post.findOne({_id: req.params.id}, function(err, post){
//          var comment = new Comment(req.body);
//          comment._post = post._id;
//          post.comments.push(comment);
//          comment.save(function(err){
//                  post.save(function(err){
//                        if(err) { console.log('Error'); } 
//                        else { res.redirect('/'); }
//                  });
//          });
//    });
//  });



// app.get('/mongoose/new', function(req, res) {

//  res.render("new");
// });

// //------------------

// app.post('/mongoose', function(req, res) {

//   var user = new UserAnimal({name: req.body.name, animal: req.body.animal});

//   user.save()

//   res.redirect('/');
// });

// //---------------------

// app.get('/mongoose/:id', function(req, res) {


// UserAnimal.find({_id:req.params.id}, function(err,users)
//     {    
      
//      res.render("display", {list1:users});
//     });

// });

// //-----------------
// app.get('/mongoose/edit/:id', function(req, res) {

//   UserAnimal.find({_id:req.params.id}, function(err,users)
//     {    
     
//      res.render("edit", {list1:users});
//     });

// });

// //----------------
// app.post('/mongoose/:id', function(req, res) {

 
//   // UserAnimal.findOne({_id:req.params.id}, function(err,doc){
//   //   doc.name = req.body.name ;
//   //   doc.animal = req.body.animal;
//   //   doc.save();
//   //   res.redirect("/");
//   // });
//   UserAnimal.update({_id:req.params.id}, {animal: req.body.animal , name: req.body.name}, function(err, status){
//     console.log(status);
//     res.redirect("/");
//   } );
 
// });

// app.get('/mongoose/destroy/:id', function(req, res) {

 
//   UserAnimal.remove({_id:req.params.id}, function(err, status){
//     console.log(status);
//     res.redirect("/");
//   } );
 
// });




app.listen(8000, function() {
 console.log("listening on port 8000");
});
