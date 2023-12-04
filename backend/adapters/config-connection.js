require('dotenv').config();

var mysql = require('mysql2/promise');

//const user = process.env.USER;
//const password = process.env.PASSWORD;

const user = 'admin';
const password = '123456';

var connection = mysql.createPool({
    host: "localhost",
    user: user,
    password: password,
    database: 'tp_testes',
});

module.exports = connection;