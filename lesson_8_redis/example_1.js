const redis = require('redis');

//создание клиета redis
let client = redis.createClient();

client.on('error',(err)=>{console.error(`Error : ${err}`)});
client.select(6);
// Сохранение данных
//client.rpush('test','1');
//client.rpush('test','2');
//client.rpush('test',[3,4]);
let str = JSON.stringify({test:1,name:'test'});
client.rpush('test',str);
client.rpush('test',JSON.stringify({name:'test'}));
client.rpush('test',[
        JSON.stringify({name:'test'}),
        1,2, str
    ]
);
client.quit();