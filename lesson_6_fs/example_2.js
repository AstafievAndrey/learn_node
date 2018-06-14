//наблюдатель за изменениями в файлах chokidar использовался в Gulp сейчас?
const chokidar = require('chokidar');
let watcher = chokidar.watch('.',{ignored: /[\/\\]\./, persistent: true});

let log = console.log.bind(console);
watcher
    .on('add', (path) => { log('File', path, 'has been added'); })
    .on('unlink', (path) => { log('File', path, 'has been removed'); })
    .on('addDir', (path) => { log('Directory', path, 'has been added');})
    .on('unlinkDir', (path) => { 
        log('Directory', path, 'has been removed'); 
    })
    .on('error', (error) => { log('Error happened', error); })
    .on('ready', (path) => { 
        log('Initial scan complete. Ready for changes.'); 
    })
    .on('raw', (event, path, details) =>{
        log('Raw event info:', event, path, details); 
    });

watcher.on('change', (path, stats) => {
    if (stats) log('File', path, 'changed size to', stats.size);
});