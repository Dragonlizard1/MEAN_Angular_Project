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
app.use(express.static( __dirname + '/RestTask/dist' ));

//---------------------Database Table
mongoose.connect('mongodb://localhost/PokemonAPIdata');


var apiSchema = new mongoose.Schema({
 data: [],
 
},{timestamps:true});

var pokemonSchema = new mongoose.Schema({
  id: {type:Number},
  name: {type:String, unique: true},
  moves: {type:[]},
  sprites: {type: []},
  stats: {type: []},
  abilities: {type: []},
  weight: {type:Number},
  types: {type: []},
})

var moveSchema = new mongoose.Schema({
  id: {type:Number},
  accuracy:{type:Number},
  power:{type:Number},
  name: {type:String, unique: true},
  ppoint:{type:Number},
  description:{type:String}
})

//13

//------------Model



var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

mongoose.model('Pokemons', pokemonSchema); 
var PokemonTable = mongoose.model('Pokemons') ;

mongoose.model('Apis', apiSchema); 
var ApiTable = mongoose.model('Apis') ;

mongoose.model('MovesData', moveSchema); 
var MoveTable = mongoose.model('MovesData') ;

// We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// scraping file
   //scraping file  cheerio

var fs = require('fs');  //special data writing on harddrive.


//----------------Routes  -----------
//--------------------------------------
//--------------------------------

// app.get('/', function(req, res) {
//  res.render("index")
// });
app.get('/scrape1', function(req, res) {  
  const rp = require('request-promise');  //scraping file cheerio install
const cheerio = require('cheerio');  
    const options = {
      uri: `https://pokemondb.net/pokedex/all`,
      transform: function (body) {
        return cheerio.load(body);
      }
    };

    rp(options)
      .then((data1) => {
        console.log(data1);
        res.json({data:data1});
      })
      .catch((err) => {
        console.log(err);
      });

});

app.post('/getPokemonData', function(req, res) {     


   var startNum = req.body.num1;
  
    console.log(startNum);
   // for (let i = 0; i < 10; i++)
   // {
   //  strUrl = "api/v2/pokemon/" + startNum;
   //  data2.push(strUrl);

    // startNum++;
  // }

   //  P.resource(data2)
        P.getPokemonByName(startNum) // with Promise
          .then(function(datamove) {
                  {
                   // console.log("extract FInish");
                   // res.json({data:datamove})
                    // for (let k = 0; k < datamove.length; k++)
                    // {
                    //  console.log(datamove, "data collected");
                      let storedata = {
                          id: datamove.id,
                          name: datamove.name,
                          moves: datamove.moves,
                          sprites: datamove.sprites,
                          stats: datamove.stats,
                          abilities: datamove.abilities,
                          weight: datamove.weight,
                          types: datamove.types,
                        }

                          let APIpokemoninfo= new PokemonTable(storedata);

                        APIpokemoninfo.save(function(err,status)
                        {
                          if(err){
                               console.log("Returned error");
                                    // respond with JSON
                           res.json({message: "Error", error: err});
                          }
                        //   else {
                        //             // respond with JSON
                        //      res.json({message: "Success Save"});
                        //   }
                        });

                    }
                 // }
            console.log("finish success");
            startNum++;
            res.json({message:"finish", num1:startNum});
          })
          .catch(function(error) {
            console.log('There was an ERROR: ');
            res.json({message:"error server get"});
          });

});


app.post('/getMoveData', function(req, res) {     

   //let data1 = ["api/v1/move/460","api/v1/move/461", "api/v1/move/462","api/v1/move/463","api/v1/move/464" ] ;
   //let data2 = [];
   var startNum = req.body.num1;
  // let strUrl = "";
   //console.log(startNum);
   // for (let i = 0; i < 5; i++)
   // {
   //  strUrl = "api/v2/pokemon/" + startNum;
   //  data2.push(strUrl);

    
   // }

     //P.resource(data2)
        P.getMoveByName(startNum) // with Promise
          .then(function(datamove) {
                  {
                    // console.log("extract FInish");
                    // res.json({data:datamove})
                    // for (let k = 0; k < datamove.length; k++)
                    // {

                      let storedata = {
                          id: datamove.id,
                          accuracy: datamove.accuracy,
                          power: datamove.power,
                          name: datamove.name,
                          ppoint: datamove.pp,
                          description: datamove.description
                        }

                          var APIinfo= new MoveTable(storedata);

                        APIinfo.save(function(err,status)
                        {
                          if(err){
                               console.log("Returned error");
                                    // respond with JSON
                           res.json({message: "Error", error: err});
                          }
                          else{
                              console.log("finish success");
                              startNum++;
                              res.json({message:"finish", num1:startNum});
                          }
                        });

                  }
                  
     
          })
          .catch(function(error) {
            console.log('There was an ERROR: ');
          });

});

app.get('/getPokemon', function(req, res) {

 //  MoveTable.find({}).sort("id").exec( function(err,MoveData){
     let data1 = ["api/v1/move/460","api/v1/move/461", "api/v1/move/462","api/v1/move/463","api/v1/move/464" ] ;
     // let data1 = ["api/v2/pokemon/15","api/v2/pokemon/16", "api/v2/pokemon/17","api/v2/pokemon/18","api/v2/pokemon/19" ] ;
   // for (let i = 0; i <5; i++)
   //  {
  // let data1 = ['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'];

    //let data1 = ["api/v1/pokemon/23", "api/v1/pokemon/24"];
  

   //  }
  // console.log(MoveData[0].name);
   //data1 = data1.toLowerCase()
      //P.getMoveByName(250)
       P.resource(data1)
        //P.getPokemonByName('eevee') // with Promise
          .then(function(response) {
            //data1.push(response);

            console.log("finish success");
            res.json({data:response});
          })
          .catch(function(error) {
            console.log('There was an ERROR: ');
          });

  // }

    //res.json(data1);
 // });
});



  // fs.writeFile("./tmp/test1", "Hey there!", function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }

    //     console.log("The file was saved!");
    // }); 

app.get('/tasks', function(req, res) {

  ApiTable.find({}, function(err,books)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data: books});
        }
    });
});

app.get('/movetasks', function(req, res) {

  MoveTable.find({id : {$gte:500}}).sort("id").exec( function(err,MoveData)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data:MoveData});
        }
    });
});

//server get pokemon

app.get('/pokemongettasks', function(req, res) {

  PokemonTable.find({}).exec( function(err,PokeData)
    {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err});
        }
        else {
           res.json({message: "Retrieve All", data:PokeData});
        }
    });
});


app.post("/new", function(req, res) {

  var APIinfo= new ApiTable;
  APIinfo.data.push(req.body);

  APIinfo.save(function(err,status)
  {
    if(err){
         console.log("Returned error", err);
              // respond with JSON
     res.json({message: "Error", error: err});
    }
    else {
              // respond with JSON
       res.json({message: "Success Save"});
    }
  });
});



app.post("/movedata", function(req, res) {

  var APIinfo= new MoveTable(req.body);

  APIinfo.save(function(err,status)
  {
    if(err){
         console.log("Returned error");
              // respond with JSON
     res.json({message: "Error", error: err});
    }
    else {
              // respond with JSON
       res.json({message: "Success Save"});
    }
  });
});

app.get("/remove/:id", function(req, res) {

  ApiTable.remove({_id: req.params.id}, function(err, status)
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

  ApiTable.find({_id: req.params.id}, function(err,book)
    {
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err});
        }
        else {
            // respond with JSON
           res.json({message: "Found Book", data: book});
        }

    });
});

app.post('/update/:id', function(req, res) {

  ApiTable.update({_id: req.params.id}, {title: req.params.title, 
    description: req.params.description,
    completed: req.params.completed}, function(err,book)
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
