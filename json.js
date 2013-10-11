var fs = require('fs');

var data = fs.readFileSync('config.json');
console.log('data: ' + data);

var obj = JSON.parse(data);
console.log(obj);

console.log(obj.name);