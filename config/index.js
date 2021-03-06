var _ = require('lodash');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app_name = "Your App Name"; //remember to rename this variable with new name(without spaces), it will also act as default mongodb database name and logging file name
var db_name = "Your Db Name"; //change if you want to have different database name than the application name.
var all = {
    env: process.env.NODE_ENV,
    path: __dirname,
    app_name: app_name,
    api_prefix: app_name,//added to work with apache and passenger, acts as in general api prefix as well
    base_url: "/",
    pri_tester_api_url:'http://10.0.5.113:8800/fsmonitor/api/freeswitch/',
    port: 8003,
    socket_io_port: 8004,
    default_server_response_timeout: 60000, // requests received will be timedout if not responded within the specified time
    logging: {
        log_file: '/var/log/node_apps/',
        console: true,
        json: false,
        level: 'silly', //[silly,debug,verbose,info,warn,error]
        datePattern: 'yyyy-MM-dd',//log rotation
        maxsize: 104857600, //log rotates after specified size of file in bytes
        colorize: 'true',
        mongo: {
            host: "mdb.phnapp.com",
            db: "phnapp",
            port: 27017,
            username: 'admin',
            password: 'inf0viv@',
            enabled: false
        }
    },
    mongo: {
        uri: 'mongodb://10.0.5.113/',
        options: {
            db: {native_parser: true},
            server: {poolSize: 5},
            user: 'dev',
            pass: 'dev'
        }
    },
    mysql: {
        init: true,
        options: {
            connection_limit: 10,
            host: 'localhost',
            user: 'root',
            password: 'viv@inf0',
            database: ''
        }
    },
    mysql_sms_dlr: {
        init: true,
        options: {
            connection_limit: 10,
            host: 'localhost',
            user: 'user',
            password: 'pass',
            database: ''
        }
    },
    app_settings: {
        }
};
all = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});
//all = _.merge(all, require('./define') || {});

all.logging.log_file += app_name;
all.mongo.uri += db_name;
all.mysql.options.database = db_name;

module.exports = all;


