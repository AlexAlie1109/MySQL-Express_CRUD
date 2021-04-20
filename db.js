const mysql = require('mysql');
const databaseString =  "mysql://root:11091991@localhost:3306/first_sql"
const databaseConnection = mysql.createConnection(databaseString);



module.exports = databaseConnection;
