const mysql = require('mysql'); 
const crypto = require('crypto');
const config = require('./config.js');

console.log(process.argv);

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

connection.connect();

let username = process.argv[2];
let userpass = process.argv[3];

let salt = Math.round((Date.now()*Math.random()))+'';
let hashpassword = crypto.createHash('sha512')
                        .update(salt+userpass,'utf8')
                        .digest('hex');
//создаем запись пользователя
connection.query(
    'INSERT INTO user SET username = ?, passwordhash = ?, salt = ?',
    [username, hashpassword, salt],
    function(err, result){
        if(err) console.log(err);
        connection.end();
    }
);
