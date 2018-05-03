const util = require('util');
const eventEmitter = require('events');
const fs = require('fs');
const FILE_PARAM = {
    'flags': 'a',
    'encoding': 'utf-8',
    'mode': 0o666
}

class InputAction extends eventEmitter.EventEmitter{   
    
    constructor(name, file){
        super();
        this.name = name;
        this.file = file;
        this.writeStream = fs.createWriteStream(
            './'+name+'.txt', FILE_PARAM
        );
    }
    
    isBuffer(data){
        return data instanceof Buffer;
    }
    
    action(input){
        if (this.isBuffer(input))
            input = input.toString();
        
        let command = input.substr(0, 3);
        let str = input.substr(3, input.length);
        
        switch(command){
            case 'wr:':
                this.emit('write', str, this.writeStream);
                break;
            case 'en:':
                this.emit('end', str, this.writeStream);
                break;
            default:
                process.stdout.write('Undefined command. Try Again!');
        }
    }
    
}

let obj = new InputAction('somename','test');

obj.on('write',(data, writeStream)=>{
    writeStream.write(data, 'utf-8');
});

obj.on('end',(data, writeStream)=>{
    writeStream.write(data, 'utf-8');
    process.exit();
});

process.stdin.on('readable',()=>{
    let input = process.stdin.read();
    if(input !== null){
        obj.action(input);
    }
});
