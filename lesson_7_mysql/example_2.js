const mysql = require('mysql');
const crypto = require('crypto');
const config = require('./config.js');

let connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

let username = process.argv[2];
let userpass = process.argv[3];

connection.query(
    'SELECT passwordhash, salt FROM user WHERE username = ?',
    [username],
    function(err, result, fields){
        if (err) console.log(err);
        for(let i = 0; i < result.length; i++){
            let hash = crypto.createHash('sha512')
                        .update(result[i].salt + userpass, 'utf8')
                        .digest('hex');
            if(result[i].passwordhash === hash){
                console.log('ok, all cool');
            }else{
                console.log(`=( ${result[i].passwordhash} !== ${hash}`);
            }   
        }
        connection.end();
    }
);