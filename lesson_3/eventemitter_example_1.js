process.stdin.setEncoding('utf8');
let events = require('events');
let count = 1;
let em = new events.EventEmitter();

setInterval(()=>{
    em.emit('myevent',count++);
},2000);

em.on('myevent',(count)=>{
    console.log(count);
});

process.stdout.write('Press q or Q and enter for exit');
process.stdin.on('readable',()=>{
    let input = process.stdin.read();
    if(input !== null){
        let command = input.trim().toLowerCase();
        if(command == 'q'){
                process.exit(0);
        }
    }
});

//console.log(em);


