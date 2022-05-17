const mysql = require('mysql');

const conn = {
    host: 'localhost',
    user: 'root',
    password: 'backpack',
    database: 'practice',
};

const pool = mysql.createPool(conn)

module.exports = pool;