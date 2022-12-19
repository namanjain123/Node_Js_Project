var os = require('os');
var value =  os.cpus();
console.log(value);
value=os.arch();
console.log(value);
value=os.hostname();
console.log(value);
