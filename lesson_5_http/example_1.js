let http = require('http');
let querystring = require('querystring');
let config = require('./config.js');

const server = http.createServer((request, response)=>{
    console.log(request.method);
    if(request.method === 'POST'){
        let body = '';
        request.on('data',(data)=>{
            console.log(data);
            body += data;
        });
    }else{
        response.end(`Hello world! server listen on port ${config.port}!\n`);
    }
//    request.on('end',()=>{
//        let post = querystring.parse(body);
//        console.log(post);
//        response.writeHead(200, {'Content-Type': 'text/plain'});

//    });
});

//server.on('request', (request, response)=>{
////    if(request.method === 'POST'){
////        let body = '';
////        request.on('data',(data)=>{
////            body += data;
////        });
//        //переданные данные
//        request.on('end',()=>{
//            let post = querystring.parse(body);
//            console.log(post);
//            response.writeHead(200, {'Content-Type': 'text/plain'});
//            response.end(
//                `Hello world! server listen on port ${config.port}!\n`
//            );
//        });
////    }
//});

server.listen(config.port);

console.log(`server listen on port ${config.port}`);

