in the terminal
to boot the MongoDB

cd c:/"Program Files"/MongoDB/Server/3.6/bin/
./mongod    //to run the server mongod

new terminal
same folder
./mongo    // this is to see it manually

---------commands

show dbs  //list all database
show collections //list all table in the dbs
use users  //load that database or if none will create one
db.dropDatabase() //if loaded then this will erase database.
// use as last resort

db.createCollection('users') //create the table in dbs
db.users.drop() //will delete the table only

db.users.insert({name:"david", belt:"black"})  //to insert into table
db.users.find({name: "david"})  //query to find
db.users.update({name:"david"}, {location: "dallas"})
//first part to find then   add.  but this will replace original line

db.users.update({name:"david"}, {$set: {location: "dallas"}})
// this will find,  then add the key and info to the set.

db.users.remove({name: "david"})  //this will find and remove all that match it
db.users.remove({name: "david"}, true) // this will remove 1 

db.users.find()  // will list all
db.users.find().pretty()  // will list all and format it nicely


-----operation
db.dojos.find({number_of_students: {$gt: 15}})  // key and find value is greater than 15
$gte: // greater than equal to
$lt:  //less than
$lte: // less than equal to
$in:  // find inside a list array

here is the link mongo db operator:
"  https://docs.mongodb.com/manual/reference/operator/  "

date.replace(/T/, ' ').replace(/\..+/, '') 


