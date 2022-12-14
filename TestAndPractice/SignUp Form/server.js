var express = require('express');
var path = require('path'); 
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var app = express();
//get connection string
const dbConfig = require('./config/databaseconfig.js');
//Default routers
app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

//get HMAC
var getHash = ( pass , phone ) => {	
    var hmac = crypto.createHmac('sha512', phone);
    //passing the data to be hashed
    data = hmac.update(pass);
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);
    return gen_hmac;
}
//recive the sign up
app.post('/sign_up' ,function(req,res){
    //get the data from the form
	var name = req.body.name;
	var email= req.body.email;
	var pass = req.body.password;
	var mobileno = req.body.mobileno;
	var password = getHash( pass , mobileno ); 				
    //Setting the model
	var data = {
		"name":name,
		"email":email,
		"password": password, 
		"mobileno" : mobileno
	}
	
	mongo.connect( dbConfig.url, function(error , db){
		if (error){
			throw error;
		}
		console.log("connected to database successfully");
		//CREATING A COLLECTION IN MONGODB USING NODE.JS
		db.collection("details").insertOne(data, (err , collection) => {
			if(err) throw err;
			console.log("Record inserted successfully");
			console.log(collection);
		});
	});
	
	console.log("DATA is " + JSON.stringify(data) );
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/result.html');  
});
