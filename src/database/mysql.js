const mysql = require('mysql2');

const config = require('../config/dbConfig');

var pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  connectionLimit: config.connectionLimit,
  multipleStatements: config.multipleStatements,
});

exports.pool = pool;