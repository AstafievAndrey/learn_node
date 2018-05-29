let http = require('http');
let querystring = require('querystring');
let config = require('./config.js');

let server = http.createServer().listen(config.port);

server.on('request', (request, response)=>{
    if(request.method === 'POST'){
        let body = '';
        request.on('data',(data)=>{
            body += data;
        });
        //переданные данные
        request.on('end',()=>{
            let post = querystring.parse(body);
            console.log(post);
            response.writeHead(200, config.headers.textPlain);
            response.end(
                `Hello world! server listen on port ${config.port}!\n`
            );
        });
    }
});

console.log(`server listen on port ${config.port}`);

