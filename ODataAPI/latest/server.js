const express = require('express');
const bodyParser = require('body-parser');
//Mongo SetUP
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
//OData Layer
const odata = require('odata-v4-mongodb');
//SetUp the API Mongo
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
//Express SetUps
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
//Routes and the path etc
const jobRoute = require('./routes/jobs.js')
const projectRoute = require('./routes/project.js')
const skillRoute = require('./routes/skills.js')

app.use('/job',jobRoute);
app.use('/skill',skillRoute)
app.use('/project',projectRoute)
//OData
app.use('/odata/skills', (req, res, next) => {
    odata(req, res, next, mongoose.model('skills'));
});
app.use('/odata/project', (req, res, next) => {
    odata(req, res, next, mongoose.model('project'));
});
app.use('/odata/skills', (req, res, next) => {
    odata(req, res, next, mongoose.model('job'));
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});