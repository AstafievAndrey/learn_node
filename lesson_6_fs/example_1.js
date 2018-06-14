const fs = require('fs');
const util = require('util');
const Mode = require('stat-mode');

fs.stat('./kotik.jpg',(err, stat)=>{
    if(err) return console.log(err);
    let mode = new Mode(stat);
    console.log(util.inspect(stat));
    console.log(mode.toString());
    console.log(`Group execute ${mode.group.execute}`);
    console.log(`Other write ${mode.others.write}`);
    console.log(`Owner read ${mode.owner.read}`);
    console.log(`Owner write ${mode.owner.write}`);
});
