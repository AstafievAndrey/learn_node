let http = require('http');
let querystring = require('querystring');
let config = require('./config.js');

let postData = querystring.stringify({
    'msg':'Welcome to cource!'
});

let options = {
    hostname:'localhost',
    port: config.port,
    method: 'POST',
    headers:{
        'Content-Type': config.headers.appForm['Content-Type'],
        'Content-Length':postData.length
    }
};

let req = http.request(options,(response)=>{
//    console.log(`STATUS: ${response.statusCode}`);
//    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    response.setEncoding('utf8');
    // Получение данных по фрагментам
    response.on('data', (chunk)=> {
        console.log('BODY: ' + chunk);
    });
    // Завершение ответа
    response.on('end',() => {
        console.log(`No more data in response.`)
    })
});

req.on('error', (e) =>{
    console.log(`problem with request: ${e.message}`);
});
// Запись данных в тело запроса
req.write(postData);
req.end();

