const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'rajarshi',
    password: 'Test@123',
    database: 'ecommerce'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

module.exports = db;
