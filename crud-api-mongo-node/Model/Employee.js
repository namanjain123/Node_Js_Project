var mongoose = require('mongoose');
var schema=new mongoose.Schema({
EmployeeId:{
    type: Int,
    required: true,
    unique: true
},
EmployeeName:{
    type:String,
    default:" "
},
Department:{
    type:String
},
DateOfJoining:{
    type:String
},
Photo:{
    type:String
}
})
var employee = new mongoose.model('Employee', schema);
module.exports = employee;