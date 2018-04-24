var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')



app.use(session({secret: 'brehhhh'}));
app.use(express.static( __dirname + '/gold/dist'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/gold');

var GoldSchema = new mongoose.Schema({
	score: {type: Number},
}, {timestamps: true});

mongoose.model('Gold', GoldSchema);
var Gold = mongoose.model('Gold');

mongoose.Promise = global.Promise;
app.use(bodyParser.json());

app.get('/gold',(req,res) =>{
	console.log("INSIDE RES GET");
	let score = new Gold({score: 0});
	score.save((err)=>{
		if(err){
			console.log("Error saving score.");
			res.json({message: "error"});
		}
		else{
			session.game = score._id;
			//session.game = session.game;
			console.log("YAY");
			
			res.json({message: "success"});
		}
	});
});

app.post('/results1',(req,res)=>{
	console.log('clicked!!!');

	console.log(req.body, "body");
	console.log(session.game, "inside the result");
	Gold.findOne({_id: session.game }, (err, new_score)=>{
		console.log(new_score, "score data");
		});
	if (req.body){
		console.log("INSIDE THE FARM");
		console.log(req.body, "body");
		Gold.update({_id: session.game }, {score:req.body.score}, (err, new_score)=>{
			if(err){
				console.log("Error updating score.");
				res.json({message:"error"});
			}
			else{
				console.log("Successfully updated score.");
				//console.log(score);
				res.json({message:"successful update"});
			}
		});
	}
		
	else
		{res.json({message:"end error"})}
	// if (req.body.cave){
	// 	gain= Math.floor(Math.random()*6)+5
	// 	Gold.update({score: goldCount + gain}, (err, new_score)=>{
	// 		if(err){
	// 			console.log("Error updating score.");
	// 		}
	// 		else{
	// 			console.log("Successfully updated score.");
	// 			console.log(new_score);
	// 		}
	// 	})	
	// }
	// if (req.body.house){

	// 	gain= Math.floor(Math.random()*9)+7
	// 	Gold.update({score: goldCount + gain}, (err, new_score)=>{
	// 		if(err){
	// 			console.log("Error updating score.");
	// 		}
	// 		else{
	// 			console.log("Successfully updated score.");
	// 			console.log(new_score);
	// 		}
	// 	})
	// }
	// if (req.body.casino){

	// 	gain= Math.floor(Math.random()*201)-100
	// 	Gold.update({score: goldCount + gain}, (err, new_score)=>{
	// 		if(err){
	// 			console.log("Error updating score.");
	// 		}
	// 		else{
	// 			console.log("Successfully updated score.");
	// 			console.log(new_score);
	// 		}
	// 	});
	//};
});

app.listen(8000,function(){
	console.log('listening on port 8000')
});