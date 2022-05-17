const config = require("./dbconfig");
const mysql = require('mysql');

const pool = mysql.createPool(config);
if (pool) console.log('Connected...');

module.exports = { pool };