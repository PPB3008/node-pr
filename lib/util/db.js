const mysql = require('mysql');
const config = require('./../../db-config/db-config');
const db_config = config.database;


const pool = mysql.createPool({
    host: db_config.HOST,
    user: db_config.USERNAME,
    password: db_config.PASSWORD,
    database: db_config.DATABASE,
    port: db_config.PORT
});
