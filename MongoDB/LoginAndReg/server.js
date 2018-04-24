var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

//-----mongoose db addin:
var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

app.use(session({secret: 'codingdojorocks1'})); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//---------------------Database Table
mongoose.connect('mongodb://localhost/LoginAndReg');

var UserSchema = new mongoose.Schema({
 f_name: {type:String, required:[true, "Need a first name for registration."], trim: true},
 l_name: {type:String, required:[true, "Need a last name for registration."], trim: true},
 email: {type:String, unique:[true, "Email is already used and must be unique."],
    validate: {validator: function( value ) {
      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test( value );
    },
    message: "Email failed validation and must be format correctly."
   }
},
 password: {
  type: String,
  required: [true, "Must have a password."],
  minlength: [8, "Minimum of 8 character password."],
  maxlength: [32, "Maximum of 32 character password."],
  validate: {
    validator: function( value ) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    },
    message: "Password failed validation, you must have at least 1 number, uppercase and special character"
  }
},
 date_of_birth: {type:Date, required:[true, "Need a Date of Birth for celebration."]}

},{timestamps:true});

UserSchema.pre('save', function(next) {
    var user = this;

if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });

});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        console.log(err);
         console.log(isMatch, "isMatch");
        cb(null, isMatch);
    });
};
//------------Model
mongoose.model('Users', UserSchema); // We are setting this Schema in our Models as 'User'
var UserTable = mongoose.model('Users') // We are retrieving this Schema from our Models, named 'User'




// Use native promises
mongoose.Promise = global.Promise;

//----------------Routes  -----------
//--------------------------------------
//--------------------------------
app.get('/', function(req, res) {
 let error1 = [];

   error1.push({
    "message": req.session.error
   });
   if (req.session.error)
   {
   req.session.destroy();
    }
 res.render("index", {errors: error1});

});

app.post('/', function (req, res){
    var user1 = new UserTable({
      f_name:req.body.f_name,
      l_name:req.body.l_name,
      email: req.body.email,
      password: req.body.password,
      date_of_birth: req.body.date_of_birth

    });

    user1.save(function(err){
        if(err){
          console.log(user1.errors);
            res.render('index', {errors: user1.errors})
        }
        else {
            req.session.error = "You have successfully registered.";
            res.redirect('/');
        }
    });

})

app.post('/login', function (req, res){
  UserTable.findOne({email: req.body.email}, function(err, user1) {
      if (err) {
            console.log("ithas email error");
            res.redirect('/');
        }
        
      if (user1){
      // test a matching password
      user1.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch) {
           res.render('login');
        }
        else {
   
          req.session.error = "Password does not match.";
           res.redirect('/');
            
        }
       
        });
      }
      else
        {
         
          req.session.error = "Email does not match.";
          res.redirect("/")}
  });
});



app.get('/verify', function(req, res) {
  UserTable.findOne({f_name:"robert"}, function(err, user1){
    console.log(user1.password);
  })
  res.redirect('/');
});



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
