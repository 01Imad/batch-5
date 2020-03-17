const fs = require("fs");
//async
fs.readFile('TestFile.txt', function (err, data) {
    if (err) throw err;

console.log(data.toString());
});

//sync
var data = fs.readFileSync('TestFile.txt', 'utf8');

console.log(data.toString());