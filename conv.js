//conv.js
var fs = require('fs');
fs.readFile('./data/bgm/theme.mp3', function(err, data) {
   var base64data = new Buffer(data).toString('base64');
   console.log(base64data);
});