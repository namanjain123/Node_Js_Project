//Addition of the packages used
var express = require('express')
var app=express();
//initialize the server
var server = require('http').Server(app);
//path defined
var path=require('path');
var bodyParser = require('body-parser');
var io = require('socket.io')(server);;
//Twitter
var Twitter = require('twitter');
var request = require("request");
//MomgoDb
var mongo = require('mongodb');

//Twitter Credentials
var client = new Twitter({
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
  });
  //Connect the mongo db
  var new_db = "mongodb+srv://naman:njain2337@cluster0.y1gmxtt.mongodb.net/test"
  var connect=mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	console.log("Database demo_db created successfully");
	//To close the connection
	db.close();
});

//Set the Server port
server.listen(3000);
console.log("Server listening at : 3000");
//Default Route
app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/index.html');
});

app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
              