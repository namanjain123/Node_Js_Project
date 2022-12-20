//have libraray
const express = require('express');
const cors = require('cors');
//Have prot and run the app
const app = express();
const PORT=8080;
app.use(express.json());
app.use(cors());
//Setup the initial page
app.get('/', (req,res)=>{
  res.send('Welcome to Naman Github Profile!')
})
app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))
//getting the middleware
const middleware=require('./middleware');
//use
app.use(middleware.setHeaders);

//Api routing
const routes = require('./routes');
app.use('/github', routes);