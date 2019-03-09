const targz = require('targz');
const path = require('path');
targz.compress({
    src: './package',
    dest: './packages.tar.gz',
    tar: {
        ignore: function(name) {
            return path.extname(name) === '.bin' // ignore .bin files when packing
        }
    },
}, function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Done!");
    }
});