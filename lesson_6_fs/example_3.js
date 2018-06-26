var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(
            '/var/www/html/geo/public/data-mo.json'
        )
});

lineReader.on('line', function (line) {
    if(line.indexOf('огачева') !== -1){
        console.log(line);
        process.exit(0);
    }
});
