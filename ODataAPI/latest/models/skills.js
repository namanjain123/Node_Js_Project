var mongoose = require('mongoose');
var schema=new mongoose.Schema({
Id: {
    type:Integer,
    required: true,
    unique: true
},
Skill:String,
Rating:String,
SubSet:String,
});
var skills = new mongoose.model('Skills', schema);
module.exports = skills;