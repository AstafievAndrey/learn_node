let util = require('util');
let eventEmitter = require('events');
const FS = require('fs');
const FILE_PARAM = {
    'flags': 'a',
    'encoding': 'utf-8',
    'mode': 0o666
}

class InputAction extends eventEmitter.EventEmitter{   
    
    constructor(name, file){
        this.name = name;
        this.file = file;
        this.writeStream = FS.createWriteStream('./'+file+'.txt', FILE_PARAM);
    }
    
    action(input){
        let command = input.substr(0, 3);
        let str = input.substr(3, input.length);
        
        switch(command){
            case 'wr:':
                break;
            case 'en:':
                break;
            default:
                process.stdout.write('Undefined command. Try Again!');
        }
    }
    
}

let obj = new InputAction('somename','test');
//util.inherits(obj, eventEmitter);

obj.on('write',(data)=>{
    this.writeStream(data, 'utf-8');
});

obj.on('end',(data)=>{
    this.writeStream(data, 'utf-8');
    process.exit();
});

process.stdin.on('readable',()=>{
    let input = process.stdin.read();
    if(input !== null){
        obj.action(input);
    }
});
