let http = require('http');
let querystring = require('querystring');
let config = require('./config.js');

const server = http.createServer((request, response)=>{
    if(request.method === 'POST'){
        let body = '';
        request.on('data',(data)=>{
            body += data;
        });
        request.on('end',()=>{
            let post = querystring.parse(body);
            console.log(post); 
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`end response`);  
        });
    }else{
        response.end(`Hello world! server listen on port ${config.port}!\n`);
    }
});
server.listen(config.port);
console.log(`server listen on port ${config.port}`);

