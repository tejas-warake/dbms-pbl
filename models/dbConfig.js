import mysql from 'mysql';

var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Teju@321",
    database: "dbmspbl"
})

export default connection;