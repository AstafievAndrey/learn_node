'use strict';
var mongoose = require('mongoose');
var readLine = require('readline');
var console = require('console');

var gracefullShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected ' + msg);
        callback();
    });
};

process.once('SIGUSR2',function () {
    gracefullShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function () {
    gracefullShutdown('app termination', function () {
        process.exit(0);
    });
});


//mongodb://username:password@localhost:27027/database - полный вариант подключения
var dbUri = 'mongodb://localhost/Loc8r';//сокращенный вариант подключения
mongoose.connect(dbUri);


mongoose.connection.on('connected', function () {
    console.log('connected' + dbUri);
});

mongoose.connection.on('error', function (err) {
    console.log('error' + err);
});

mongoose.connection.on('dissconnected', function () {
    console.log('dissconnected');
});