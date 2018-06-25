let http = require('http');
let querystring = require('querystring');
let config = require('./config.js');

//'asGuest' => 'false', 'overrideSession' => 'true',
//                        'ForceNewSession' => 'true', 'locale' => '',
//                        'login' => Yii::$app->params['authLogin'],
//                        'password' => Yii::$app->params['authPassword']
let postData = querystring.stringify({
    'asGuest': 'false',
    'overrideSession': 'true',
    'ForceNewSession': 'true',
    'locale': '',
    'login': config.login,
    'password': config.password
});

let options = {
    hostname:config.hostname,
    port:80,
    method: 'POST',
    path:'/default/login/login',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length':postData.length
    }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end(); 


