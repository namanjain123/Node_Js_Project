var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello')
})
app.listen(3000, function () {
  console.log('Server is listening')
})

//Routing

  
  app.get('/signin', function (req, res) {
    res.send('demo route for sign in');
  })
  
  app.get('/signin/dashboard', function (req, res) {
    res.send('demo route for user who signed in and now reaches their dashboard');
  })

  //Get Parameters
  app.get('/signup', function(req,res){
	// this is how we will receive params from front end 
	
    var name = req.query.name; 
  var classes = req.query.classes;
  var password = req.query.password;
  //For demo purpose
  console.log(name + '' + classes + ' ' + password);

  /**
   * Store this in a database and perform further processing
   */
    res.send("In signup module")
});
  