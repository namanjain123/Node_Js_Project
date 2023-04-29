var mongoose = require('mongoose');
var schema=new mongoose.Schema({
Id: {
    type:String,
    required: true,
    unique: true
},
name:String,
jobDescription:String,
recruitername:String,
email:String,
contact:String,
});
var job = new mongoose.model('Jobs', schema);
module.exports = job;