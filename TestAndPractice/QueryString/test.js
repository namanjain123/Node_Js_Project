var qs = require('querystring');
var value_json = qs.parse('id=1&name=rj&name=nj')
console.log(value_json);  

var value_json_2 = qs.parse('id%2&name%reij&name%njs','&','%');
console.log("Changing the default 'eq' from '=' to '%'. An example is shown below:");
console.log(value_json_2); 

var value_json_3 = qs.parse('id%3#name%emily#name%nj','#','%');
console.log("Changing the default Separator 'sep' from '&' to '#'. An example is shown below:")
console.log(value_json_3);