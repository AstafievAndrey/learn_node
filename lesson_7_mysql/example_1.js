const mysql = require('mysql'); 
const crypto = require('crypto');

console.log(process.argv);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodedatabase',
    password: 'password'
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
