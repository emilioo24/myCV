const env = require('dotenv').config();

const mysqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

module.exports = mysqlConfig;