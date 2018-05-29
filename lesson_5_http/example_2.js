let http = require('http');
let querystring = require('querystring');
let config = require('./config.js');

let postData = querystring.stringify({
    'msg':'Welcome to cource!'
});

let options = {
    hostname:'localhost',
    port: config.port,
    headers:{
        'Content-Type': config.headers.appForm['Content-Type'],
        'Content-Length':postData.length
    }
};

console.log(options);

//let server = http.createServer().listen(PORT);
//
//server.on('request', (request, response)=>{
//    if(request.method === 'POST'){
//        let body = '';
//        request.on('data',(data)=>{
//            body += data;
//        });
//        //переданные данные
//        request.on('end',()=>{
//            let post = querystring.parse(body);
//            console.log(post);
//            response.writeHead(200, ${config.textPlain});
//            response.end(
//                    `Hello world! server listen on port ${config.port}!\n`
//                );
//        });
//    }
//});
//
//console.log(`server listen on port ${config.port}`);

