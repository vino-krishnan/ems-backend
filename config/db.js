const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    // host: process.env.DB_HOST || 'localhost',
    // user: process.env.DB_USER || 'root',
    // password: process.env.DB_PASSWORD || 'abiVINO18@&',
    // database: process.env.DB_NAME || 'emp_system',
    // port: process.env.DB_PORT || 3306,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
      host: process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME ,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
pool.getConnection((err, connection) => {
    if (err) {
        console.error(" DB connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
        connection.release(); 
    }
});

module.exports = pool.promise();
