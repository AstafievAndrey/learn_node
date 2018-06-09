const fs = require('fs');
const util = require('util');

fs.stat('./kotik.jpg',(err, stat)=>{
    if(err) return console.log(err);
    console.log(util.inspect(stat));
});
