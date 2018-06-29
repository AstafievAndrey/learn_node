const mysql = require('mysql'); 
const crypto = require('crypto');

console.log(process.argv);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

connection.connect();
connection.query('USE nodedatabase');

let username = process.argv[2];
let userpass = process.argv[3];

let salt = Math.round((Date.now()*Math.random()))+'';
let hashpassword = crypto.createHash('sha512')
                        .update(salt+userpass,'utf8')
                        .digest('hex');
//создаем запись пользователя
connection.query(
    'INSERT INTO user SET username = ?, passwordhash = ?, salt = ?',
    [username, userpass, salt],
    function(err, result){
        if(err) console.log(err);
        connection.end();
    }
);
