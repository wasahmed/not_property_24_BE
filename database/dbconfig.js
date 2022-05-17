require('dotenv').config();

const config = {
    connectionLimit : 100,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10)
};
module.exports = config;