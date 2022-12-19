//have libraray
const express=require('express');
const request=require('request')
//Application start
const app=express()

//Configure the routes be there
var config={
    client_id: 'fc2fb12e24bfa4bb5e35',
   client_secret: '5a05c2779a33abed01c19c5838441b41b2afe9b2',
   redirect_url: 'http://localhost:3000/github/callback',
   authorize_url:'https://github.com/login/oauth/authorize',
   token_url: 'https://github.com/login/oauth/access_token',
   user_url: 'https://api.github.com/user',
   scope: 'user'
}
//console.log(config.client_id,config.client_secret);

//Routes be there

//Routes for github outh
app.get('/github/auth', function(req,res){
    return res.redirect(config.authorize_url);
 });

 //setting callback

 app.get('/github/callback', function(req,res){
    // extract authorize code 
    var code = req.query.code
    // configure request
    options = {
      method: 'POST',
      uri: config.token_url,   
      formData: {
        client_id   : config.client_id,
        client_secret   : config.client_secret,
        code : code
      },
      headers: {
        accept:  'application/json'
      }
    };
    // make request for auth_token
    request(options , function(e,r,b){
    
      // process the body
      if(b) {
        jb = JSON.parse(b)
 
        // configure request to fetch user information
        options_user = {
          method:'GET',
          url: config.user_url+'?access_token='+jb.access_token,
          headers: {
            accept: 'application/json',
            'User-Agent': 'custom'
          }
        }
        request(options_user , function(ee,rr,bb){
          // process the body
          if(bb) {
            var bo = JSON.parse(bb)
            var resp = {
              name: bo.name ,
              url: bo.url ,
              id: bo.id ,
              bio: bo.bio
            }
            return res.json(resp)
          }
          else {
            console.log(er)
            return res.json(er)
          }
        });
      }
    });
  });
 
 
 // Start The code
 
 app.listen(3000, () => console.log('Naman github-api app listening on port 3000!',config.client_id,config.client_secret));
 
     