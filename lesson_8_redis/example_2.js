const redis = require('redis');

//создание клиета redis
let client = redis.createClient();

client.on('error',(err)=>{console.error(`Error : ${err}`)});
client.select(6);
client.lpop('test',(err, reply)=>{
    if(err) {
        return console.error('error response ' + err);
    }
    return console.log(reply);
});
client.quit();