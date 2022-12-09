var mongoose = require('mongoose');
var schema=new mongoose.Schema({
Departmentid:{
    type: Int,
    required: true,
    unique: true
},
Departmentame:{
    type:String,
    default:" "
},
})
var department = new mongoose.model('Department', schema);
module.exports = department;