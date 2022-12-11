var mongoose = require('mongoose');
var schema=new mongoose.Schema({
Departmentid: {
    type:String,
    required: true,
    unique: true
},
DepartmentName:String,
});
var department = new mongoose.model('Department', schema);
module.exports = department;