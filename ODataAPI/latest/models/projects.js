var mongoose = require('mongoose');
var schema=new mongoose.Schema({
    Id: { type: Number, required: true },
    Project_Name: { type: String, required: true },
    Description: { type: String, required: true },
    Skills: { type: [String], required: true }
});
var project = new mongoose.model('Projects', schema);
module.exports = project;