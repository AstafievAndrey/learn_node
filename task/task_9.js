var http = require('https');
var fs = require('fs');

var file = fs.createWriteStream("files/019.mp3");
var request = 
http.get("https://get10.sweetbook.net/b/33660/Kv3bwTPiPyUFKOCtjq8a52zDGkw_u1zj5sKQ4ci44DU,/%D0%9A%D0%B0%D0%BA%20%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%B0%D1%82%D1%8C%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20019.mp3", 
function(response) {
  response.pipe(file);
});

